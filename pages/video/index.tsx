import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Head } from 'components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { MUTATION, QUERY } from 'lib/graphql'
import { useMutation, useQuery } from '@apollo/client'
import ReactPlayer from 'react-player'
import {
  Box,
  SkeletonText,
  Icon,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Stack,
  Checkbox,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { IoAdd, IoInformation, IoClose, IoCheckmark } from 'react-icons/io5'
import { GetOrgMedias, GetOrgMediasVariables } from 'lib/graphql/types'
import { ORG_MEDIA_STATUS } from 'lib/constants'
import {
  UpdateOrgMediaStatus,
  UpdateOrgMediaStatusVariables,
} from 'lib/graphql/types'
import { useUserSession, useIsAdminUser } from 'utils/hooks'
import { useRouter } from 'next/router'
import { BottomNav } from 'components/bottom-nav/bottom-nav'
import { VideoPlayer } from 'components/video-player/video-player'
import { css } from 'linaria'
import { FiFilter } from 'react-icons/fi'
import { useDebounce } from 'use-debounce'
import cn from 'classnames'
import Link from 'next/link'
import { Pages } from 'components/nav/pages'
import { withAuth } from 'utils/with-auth'

const DEBOUNCE_STATUS = 700

const Videos: NextPage<unknown> = (props) => {
  const isAdmin = useIsAdminUser()
  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])
  const userId = useMemo(() => userInfo?.id, [userInfo])

  const router = useRouter()
  const popup = router.query?.popup || []
  const [openCard, setOpenCard] = useState<string[]>(
    typeof popup === 'string' ? [popup] : popup,
  )
  const toggleCard = useCallback(
    (val: string) => {
      setOpenCard((v) => {
        if (v.includes(val)) {
          return v.filter((c) => c !== val)
        }
        return [...v, val]
      })
    },
    [setOpenCard],
  )

  const filter =
    (router.query.filter as ORG_MEDIA_STATUS | ORG_MEDIA_STATUS[]) || []

  const initFilterStatus = () => {
    if (
      Array.isArray(filter) &&
      filter.length !== 0 &&
      filter.every((item) => Object.values(ORG_MEDIA_STATUS).includes(item))
    ) {
      return filter
    } else if (
      typeof filter === 'string' &&
      Object.values(ORG_MEDIA_STATUS).includes(filter)
    ) {
      return [filter]
    }

    return []
  }

  const [status, setSelectedStatus] = useState<ORG_MEDIA_STATUS[]>(
    initFilterStatus(),
  )
  const [statusDebounced] = useDebounce(status, DEBOUNCE_STATUS)
  useEffect(() => {
    router.push(router.pathname, {
      query: {
        popup: openCard,
        filter: status,
      },
    })
  }, [openCard, status])

  const toggleStatus = useCallback(
    (val: ORG_MEDIA_STATUS) =>
      setSelectedStatus((v) => {
        if (v.includes(val)) {
          return v.filter((item) => item !== val)
        }
        return [...v, val]
      }),
    [setSelectedStatus],
  )

  const clearStatus = useCallback(() => setSelectedStatus([]), [
    setSelectedStatus,
  ])

  return (
    <Layout>
      <Head title='Videos | WorkReels' />
      <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='space-y-12'>
          <div className='md:max-w-xl lg:max-w-3xl xl:max-w-none flex items-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Videos
            </h2>
            <Popover>
              <PopoverTrigger>
                {userInfo ? (
                  <span className='cursor-pointer ml-4 text-xl' role='button'>
                    <Icon as={FiFilter} />
                  </span>
                ) : (
                  <span></span>
                )}
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Box direction='row'>
                      <Stack>
                        {Object.entries(ORG_MEDIA_STATUS).map(([key, val]) => {
                          function click() {
                            toggleStatus(val)
                          }
                          return (
                            <Checkbox
                              onChange={click}
                              key={key}
                              isChecked={status.includes(val)}
                            >
                              {key}
                            </Checkbox>
                          )
                        })}
                        <Button onClick={clearStatus}>Clear</Button>
                      </Stack>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
          {userInfo ? (
            isAdmin ? (
              <AdminViews
                userOrgId={userOrgId}
                filterStatus={statusDebounced}
                openCard={openCard}
                toggleCard={toggleCard}
              />
            ) : (
              <UserViews
                userOrgId={userOrgId}
                filterStatus={statusDebounced}
                userId={userId}
                openCard={openCard}
                toggleCard={toggleCard}
              />
            )
          ) : (
            <div className='text-lg md:text-xl flex flex-col items-center text-center'>
              <p>
                <Link href='/login'>
                  <a className='font-bold text-blue-800'>Login</a>
                </Link>{' '}
                or{' '}
                <Link href='/register'>
                  <a className='font-bold text-blue-800'>Register</a>
                </Link>{' '}
                to post a video or join a project.
              </p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </Layout>
  )
}

export default withAuth(Videos)

const Loading: React.FC = () => {
  return (
    <Box padding='6' boxShadow='lg' bg='white' className='max-w-6xl mx-auto'>
      <SkeletonText mt='4' noOfLines={4} spacing='4' />
    </Box>
  )
}

interface ViewProps {
  userOrgId: string
  openCard: string[]
  filterStatus?: string[]
  toggleCard?(val: string): void
}

type UserViewProps = ViewProps & {
  userId: string
}

const UserViews: React.FC<UserViewProps> = (props) => {
  const { userOrgId, filterStatus, userId, openCard, toggleCard } = props

  const { data, loading } = useQuery<GetOrgMedias, GetOrgMediasVariables>(
    QUERY.GET_ORG_MEDIAS,
    {
      variables: {
        filter: {
          media: {
            owner: {
              id: {
                equals: userId,
              },
            },
          },
          org: {
            id: {
              in: [userOrgId],
            },
          },
          ...(filterStatus?.length === 0
            ? {
                status: {
                  in: Object.values(ORG_MEDIA_STATUS),
                },
              }
            : {
                status: {
                  in: filterStatus,
                },
              }),
        },
      },
      fetchPolicy: 'cache-and-network',
    },
  )
  const medias = useMemo(
    () => data?.orgMediasList.items.filter((item) => !!item.media) || [],
    [data],
  )

  const renderEmptyMsg = useMemo(
    () =>
      medias.length === 0 && (
        <div className='text-lg md:text-xl flex flex-col items-center text-center'>
          <p className='mb-4'>
            No Videos found. Clear video filters or click
            <span className='font-bold text-blue-800'> + New Video</span>
          </p>
          <p>
            or{' '}
            <Link href='/project'>
              <a className='font-bold text-blue-800 hover:underline'>
                Projects
              </a>
            </Link>{' '}
            to see your tasks.
          </p>
        </div>
      ),
    [medias],
  )

  return (
    <div>
      {!loading && renderEmptyMsg}
      <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
        {loading &&
          Array(3)
            .fill(0)
            .map((_, idx) => (
              <li key={`loading-${idx}`}>
                <Loading />
              </li>
            ))}
        {!loading &&
          medias.map((item, idx) => {
            // console.log('media', item)
            const media = item.media
            const isOpen = openCard.includes(media?.id || '')
            function click() {
              toggleCard && toggleCard(media?.id || '')
            }
            if (media && Number(media.isProcessing) > 0) {
              return (
                <li
                  key={`${media.id}-${idx}`}
                  className='w-full h-full flex justify-center items-center -mt-12 font-semibold text-xl'
                >
                  Video is processing...
                </li>
              )
            }

            return (
              <li
                key={`${media?.id}-${idx}`}
                className='relative bg-gray-100 rounded shadow pb-4'
                style={{ width: '324px' }}
              >
                <div
                  className={`video-card ${
                    isOpen ? 'absolute opacity-60' : 'relative'
                  } space-y-4 bg-gray-100 px-2 rounded-lg flex mb-2`}
                  style={{ width: '324px', height: '576px' }}
                >
                  <VideoPlayer
                    url={media?.url as string}
                    posterUrl={media?.thumbnailUrl as string}
                    width={324}
                    height={576}
                    playerClassName={css`
                      width: 309px;
                      height: 549px;
                    `}
                  />
                </div>
                <div
                  className={`${
                    !isOpen ? 'hidden' : 'bg-opacity-80'
                  } video-details relative flex flex-col justify-around bg-gray-100 sm:px-6 mb-2 pt-8`}
                  style={{ width: '324px', height: '576px' }}
                >
                  <p>
                    <span className='text-sm italic'>File Name: </span>
                    {media?.fileName}
                  </p>
                  <p>
                    <span className='text-sm italic'>File Size: </span>
                    {((media?.size || 0) / 1000000).toFixed(2)} MB
                  </p>
                  <p>
                    <span className='text-sm italic'>Status: </span>
                    {media?.status}
                  </p>
                  <p>
                    <span className='flex items-center'>
                      <span className='text-sm italic'>Tags: </span>
                      <button
                        type='button'
                        className='inline-flex items-center p-1 mx-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <Icon as={IoAdd} />
                      </button>
                      {media?.tags?.items?.map((tag, idx) => {
                        return (
                          <span
                            key={`${tag.name}-${idx}`}
                            className='inline-flex items-center mx-2 px-3 py-0.5 rounded-full text-sm font-medium bg-green-300 text-gray-800'
                          >
                            {tag.name}
                          </span>
                        )
                      })}
                    </span>
                  </p>
                  <p>
                    <span className='flex items-center'>
                      <span className='text-sm italic'>Tagged People: </span>
                      <button
                        type='button'
                        className='inline-flex items-center p-1 mx-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <Icon as={IoAdd} />
                      </button>
                    </span>
                  </p>
                  <p>
                    <span className='text-sm italic'>
                      Project:{' '}
                      {item.parentTask?.project?.id ? (
                        <Link
                          href={`${Pages.Project}/${item.parentTask.project.id}`}
                        >
                          <a className='text-blue-500'>
                            {item.parentTask.project.name}
                          </a>
                        </Link>
                      ) : (
                        'Not associated to any project'
                      )}
                    </span>
                  </p>
                  <p>
                    <span className='text-sm italic'>
                      Task:{' '}
                      {item.parentTask?.template?.taskTemplate?.id ? (
                        <Link
                          href={`${Pages.Project}/${item.parentTask?.project?.id}`}
                        >
                          <a>{item.parentTask.template.taskTemplate.name}</a>
                        </Link>
                      ) : (
                        'Not associated to any task'
                      )}
                    </span>
                  </p>
                  <p>
                    <span className='text-sm italic'>Share With: </span>
                  </p>
                  <hr className='my-1' />
                  <div className='flex justify-evenly'>
                    <button
                      type='button'
                      className='inline-flex items-center px-2.5 py-1.5 border border-transparent rounded text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={click}
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      className='inline-flex items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={click}
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div
                  className='worker-name-info-btn mt-4 flex justify-between px-6'
                  style={{ width: '324px' }}
                >
                  <span className=''>
                    <h2 className='text-xl'>
                      {media?.owner?.firstName} {media?.owner?.lastName}
                    </h2>
                  </span>
                  <button
                    type='button'
                    className={`${
                      isOpen ? 'hidden' : ''
                    } inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white font-bold bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    onClick={click}
                  >
                    <Icon as={IoInformation} />
                  </button>
                  <button
                    type='button'
                    className={`${
                      !isOpen ? 'hidden' : ''
                    } inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white font-bold bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    onClick={click}
                  >
                    <Icon as={IoClose} />
                  </button>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

type AdminViewProps = ViewProps
const AdminViews: React.FC<AdminViewProps> = (props) => {
  const { userOrgId, filterStatus, openCard, toggleCard } = props

  const toast = useToast()
  const { data, loading, refetch } = useQuery<
    GetOrgMedias,
    GetOrgMediasVariables
  >(QUERY.GET_ORG_MEDIAS, {
    variables: {
      filter: {
        org: {
          id: {
            in: [userOrgId],
          },
        },
        ...(filterStatus?.length === 0
          ? {
              status: {
                in: Object.values(ORG_MEDIA_STATUS),
              },
            }
          : {
              status: {
                in: filterStatus,
              },
            }),
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  const [updatingId, setUpdatingId] = useState<{
    id?: string
    status?: ORG_MEDIA_STATUS
  }>({})
  // update media status
  const [updateMediaStatus] = useMutation<
    UpdateOrgMediaStatus,
    UpdateOrgMediaStatusVariables
  >(MUTATION.UPDATE_ORG_MEDIA_STATUS, {
    onCompleted() {
      refetch()
    },
  })

  const handleUpdate = useCallback(
    (id: string, status: ORG_MEDIA_STATUS) => {
      setUpdatingId({
        id,
        status,
      })
      updateMediaStatus({
        variables: {
          id,
          status,
        },
      })
        .then(() => {
          toast({
            title: `Video is marked '${status}'.`,
            position: 'top-right',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          setUpdatingId({})
        })
        .catch()
    },
    [updateMediaStatus],
  )
  const medias = useMemo(
    () => data?.orgMediasList.items.filter((item) => !!item.media) || [],
    [data],
  )
  const showMessageIfEmpty = useMemo(
    () =>
      medias.length === 0 && (
        <div className='text-xl flex flex-col items-center'>
          <p>
            No Videos found. Clear video filters or click
            <span className='font-bold text-blue-800'> + New Video</span>
          </p>
          <p>
            or{' '}
            <Link href='/project'>
              <a className='font-bold text-blue-800 hover:underline'>
                Projects
              </a>
            </Link>{' '}
            and start a new project
          </p>
        </div>
      ),
    [medias],
  )

  return (
    <div>
      {!loading && !updatingId.id && showMessageIfEmpty}
      {loading &&
        medias.length === 0 &&
        Array(3)
          .fill(0)
          .map((_, idx) => <Loading key={`loading-${idx}`} />)}

      <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
        {!loading &&
          medias.map((item, idx) => {
            const media = item.media
            const isOpen = openCard.includes(media?.id || '')
            function click() {
              toggleCard && toggleCard(media?.id || '')
            }
            function approved() {
              handleUpdate(media?.id || '', ORG_MEDIA_STATUS.Approved)
            }
            function notApproved() {
              handleUpdate(media?.id || '', ORG_MEDIA_STATUS['Not Approved'])
            }

            if (media && Number(media.isProcessing) > 0) {
              return (
                <li
                  className='w-full h-full flex justify-center items-center -mt-12 font-semibold text-xl'
                  key={`${media?.id}-${idx}`}
                >
                  Video is processing...
                </li>
              )
            }
            const loading = media?.id === updatingId.id

            return (
              <li
                key={`${media?.id}-${idx}`}
                className='relative bg-gray-100 rounded shadow pb-4'
                style={{ width: '324px' }}
              >
                <div
                  className={`video-card ${
                    isOpen ? 'absolute opacity-60' : 'relative'
                  } space-y-4 bg-gray-100 px-2 rounded-lg flex mb-2`}
                  style={{ width: '324px', height: '576px' }}
                >
                  <VideoPlayer
                    url={media?.url as string}
                    posterUrl={media?.thumbnailUrl as string}
                    width={324}
                    height={576}
                    playerClassName={css`
                      width: 309px;
                      height: 549px;
                    `}
                  />
                </div>
                <div
                  className={`${
                    !isOpen ? 'hidden' : 'bg-opacity-80'
                  } video-details relative flex flex-col justify-around bg-gray-100 sm:px-6 mb-2 pt-8`}
                  style={{ width: '324px', height: '576px' }}
                >
                  <p>
                    <span className='text-sm italic'>File Name: </span>
                    {media?.fileName}
                  </p>
                  <p>
                    <span className='text-sm italic'>File Size: </span>
                    {((media?.size || 0) / 1000000).toFixed(2)} MB
                  </p>
                  <p>
                    <span className='text-sm italic'>Status: </span>
                    {media?.status}
                  </p>
                  <p>
                    <span className='flex items-center'>
                      <span className='text-sm italic'>Tags: </span>
                      <button
                        type='button'
                        className='inline-flex items-center p-1 mx-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <Icon as={IoAdd} />
                      </button>
                      {media?.tags?.items?.map((tag, idx) => {
                        return (
                          <span
                            key={`${tag.name}-${idx}`}
                            className='inline-flex items-center mx-2 px-3 py-0.5 rounded-full text-sm font-medium bg-green-300 text-gray-800'
                          >
                            {tag.name}
                          </span>
                        )
                      })}
                    </span>
                  </p>
                  <p>
                    <span className='flex items-center'>
                      <span className='text-sm italic'>Tagged People: </span>
                      <button
                        type='button'
                        className='inline-flex items-center p-1 mx-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <Icon as={IoAdd} />
                      </button>
                    </span>
                  </p>
                  <p>
                    <span className='text-sm italic'>
                      Project:{' '}
                      {item.parentTask?.project?.id ? (
                        <Link
                          href={`${Pages.Project}/${item.parentTask?.project?.id}`}
                        >
                          <a>{item.parentTask.project.name}</a>
                        </Link>
                      ) : (
                        'Not associated to any project'
                      )}
                    </span>
                  </p>
                  <p>
                    <span className='text-sm italic'>
                      Task:{' '}
                      {item.parentTask?.template?.taskTemplate?.id ? (
                        <Link
                          href={`${Pages.Project}/${item.parentTask?.project?.id}`}
                        >
                          <a>{item.parentTask.template.taskTemplate.name}</a>
                        </Link>
                      ) : (
                        'Not associated to any task'
                      )}
                    </span>
                  </p>
                  <p>
                    <span className='text-sm italic'>Share With: </span>
                  </p>
                  <hr className='my-1' />
                  <div className='flex justify-evenly'>
                    <button
                      type='button'
                      className='inline-flex items-center px-2.5 py-1.5 border border-transparent rounded text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={click}
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      className='inline-flex items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={click}
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div
                  className='worker-name-info-btn mt-4 flex justify-between px-6'
                  style={{ width: '324px' }}
                >
                  <span className=''>
                    <h2 className='text-xl'>
                      {media?.owner?.firstName} {media?.owner?.lastName}
                    </h2>
                  </span>
                  <button
                    type='button'
                    className={`${
                      isOpen ? 'hidden' : ''
                    } inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white font-bold bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    onClick={click}
                  >
                    <Icon as={IoInformation} />
                  </button>
                  <button
                    type='button'
                    className={`${
                      !isOpen ? 'hidden' : ''
                    } inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white font-bold bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    onClick={click}
                  >
                    <Icon as={IoClose} />
                  </button>
                </div>
                <div
                  className={'notes-approval mt-2'}
                  style={{ width: '324px' }}
                >
                  <div className='flex justify-around'>
                    <button
                      type='button'
                      className='mt-3 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400'
                    >
                      Notes
                    </button>
                    <button
                      type='button'
                      className={cn([
                        'mt-3 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400',
                        {
                          'pointer-events-none': loading,
                        },
                      ])}
                      onClick={notApproved}
                    >
                      {loading &&
                        updatingId.status ===
                          ORG_MEDIA_STATUS['Not Approved'] && (
                          <Spinner className='mr-2' />
                        )}
                      <Icon as={IoClose} />
                    </button>
                    <button
                      type='button'
                      className={cn([
                        'mt-3 inline-flex items-center px-7 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
                        {
                          'pointer-events-none': loading,
                        },
                      ])}
                      onClick={approved}
                    >
                      {loading &&
                        updatingId.status === ORG_MEDIA_STATUS.Approved && (
                          <Spinner className='mr-2' />
                        )}
                      <Icon as={IoCheckmark} />
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
