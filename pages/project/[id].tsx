import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Head } from '../../components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { useLazyQuery, useQuery } from '@apollo/client'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Tag,
  TagLabel,
  useDisclosure,
} from '@chakra-ui/react'
import {
  IoAdd,
  IoChevronForwardSharp,
  IoClose,
  IoFilter,
  IoInformation,
} from 'react-icons/io5'
import cn from 'classnames'
import { BottomNav } from 'components/bottom-nav/bottom-nav'
import { useRouter } from 'next/router'
import {
  GetProjectDetail,
  GetProjectDetailVariables,
  GetProjectDetail_project_template_taskTab,
  GetProjectDetail_project_template_taskTab_items_tasks_items,
  GetProjectDetail_project_mediaTab_items,
  GetProjectDetail_project_peopleTab_items,
  GetProjectDetail_project_template_taskTab_items_tasks_items_media_items,
} from 'lib/graphql/types'
import { QUERY } from 'lib/graphql'
import { GetProjectDetail_project_template_taskTab_items_taskTemplate } from 'lib/graphql/types'
import { TaskTemplatePopup } from 'components/task-template-popup/TaskTemplatePopup'
import { useUserSession } from 'utils/hooks'
import { MediaView } from 'components/media-view/media-view'
import { withAuth } from 'utils/with-auth'
import { ORG_MEDIA_STATUS } from 'lib/constants'
import { useDebounce } from 'use-debounce/lib'
import { VideoPlayer } from 'components/video-player/video-player'
import { css } from 'linaria'
import { FiFilter } from 'react-icons/fi'
import Link from 'next/link'
import { Pages } from 'components/nav/pages'
import arraySort from 'array-sort'

enum Tabs {
  Tasks = 'Tasks',
  Media = 'Media',
  People = 'People',
  Details = 'Details',
}

const ProjectDetail: NextPage<any> = (props) => {
  const router = useRouter()
  const { id = '' } = router.query
  // state of tabs
  const [openTab, setOpenTab] = useState<Tabs>(Tabs.Tasks)

  if (typeof id !== 'string' || !id) {
    return (
      <Layout>
        <Head title='Project | WorkReels' />
        <h1>Project Not Found</h1>
      </Layout>
    )
  }

  const { data, loading, refetch } = useQuery<
    GetProjectDetail,
    GetProjectDetailVariables
  >(QUERY.GET_PROJECT_DETAIL, {
    variables: {
      projectId: id,
    },
  })

  const projectName = useMemo(() => data?.project?.name || 'Not found', [data])

  const taskTab = useMemo(() => data?.project?.template?.taskTab, [data])
  const mediaTab = useMemo(() => {
    const medias: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items[] = []
    taskTab?.items.forEach((item) => {
      item?.tasks?.items.forEach((taskItem) => {
        if (taskItem.media?.items) {
          taskItem.media.items.forEach((mediaItem) => {
            medias.push(mediaItem)
          })
        }
      })
    })
    const sortedArr = arraySort(medias, 'createdAt', { reverse: true })

    return sortedArr
  }, [data])
  const peopleTab = useMemo(() => data?.project?.peopleTab?.items || [], [data])

  const toggleMediaTab = useCallback(() => {
    setOpenTab(Tabs.Media)
  }, [setOpenTab])

  return (
    <Layout>
      <Head title={`${projectName} | WorkReels`} />
      <div className='flex justify-between max-w-6xl mx-auto pt-12 pb-4 px-4 sm:px-6 lg:px-8'>
        <div>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              {loading ? <NameSkeleton /> : projectName}
            </h1>
          </div>
          {/* {!loading && <div className='mt-4'>{projectTagsRender}</div>} */}
        </div>
        {loading ? (
          <NameSkeleton useAvatar={false} />
        ) : (
          <div>
            {/* <p className='mt-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
              Due {data?.project?.filmingDueDate}
            </p> */}
            <div className='mt-4 ml-2 flex items-center text-gray-500 text-right'>
              <p>{data?.project?.template?.taskTab?.items.length} Tasks</p>
            </div>
          </div>
        )}
      </div>
      <div className='max-w-6xl mx-auto mt-4 px-4 md:px-12'>
        <div className=''>
          <div className='border-b border-gray-200'>
            <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
              {Object.entries(Tabs).map(([key, val]) => {
                return (
                  <TabTitle
                    key={key}
                    selected={openTab === val}
                    value={val}
                    onChange={setOpenTab}
                  >
                    {key}
                  </TabTitle>
                )
              })}
            </nav>
          </div>
        </div>

        {openTab === Tabs.Tasks && (
          <Tasks
            tasks={taskTab}
            loading={loading}
            projectId={id}
            refetch={refetch}
            openMediaTab={toggleMediaTab}
          />
        )}
        {openTab === Tabs.Media && (
          <MediaTab loading={loading} medias={mediaTab} />
        )}
        {openTab === Tabs.People && (
          <WorkerTab workers={peopleTab} loading={loading} />
        )}
        {openTab === Tabs.Details && (
          <div className='details pt-4'>Details of this Project</div>
        )}
      </div>
      <BottomNav />
    </Layout>
  )
}

export default withAuth(ProjectDetail)

const NameSkeleton: React.FC<{ useAvatar?: boolean }> = (props) => {
  const { useAvatar = true } = props

  return (
    <Flex
      padding='2'
      bg='white'
      alignItems='center'
      className='max-w-6xl mx-auto'
    >
      {useAvatar && <SkeletonCircle size='10' />}
      <SkeletonText className='ml-4 w-40' noOfLines={2} spacing='4' />
    </Flex>
  )
}

interface TabTitleProps {
  selected: boolean
  value: Tabs
  onChange(val: Tabs): void
}
/* eslint-disable react/display-name */
const TabTitle: React.FC<TabTitleProps> = memo((props) => {
  const { selected, children, value, onChange } = props

  const onClick = useCallback(() => onChange(value), [value])

  return (
    <span
      role='button'
      className={cn([
        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-lg lg:text-xl',
        {
          'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': !selected,
          'border-indigo-500 text-indigo-600': selected,
        },
      ])}
      onClick={onClick}
    >
      {children}
    </span>
  )
})

interface TasksProps {
  loading?: boolean
  projectId?: string
  tasks?: GetProjectDetail_project_template_taskTab | null
  refetch: any
  openMediaTab(): void
}

const Tasks: React.FC<TasksProps> = (props) => {
  const { projectId, refetch, openMediaTab } = props
  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])
  const userId = useMemo(() => userInfo?.id, [userInfo])
  // state of tabs
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [
    selectedTemplate,
    setSelectedTemplate,
  ] = useState<GetProjectDetail_project_template_taskTab_items_taskTemplate | null>()
  const [taskId, setTaskId] = useState<string | undefined | null>('')
  const { loading, tasks } = props

  const onOpenModal = useCallback(
    (val) => {
      // taskId.current = val
      onOpen()
    },
    [onOpen, taskId],
  )

  if (loading) {
    return (
      <div className='p-6 w-3/4 max-w-6xl mx-auto'>
        <SkeletonText className='ml-4' noOfLines={6} spacing='4' />
      </div>
    )
  }

  return (
    <div className='max-w-6xl mx-auto'>
      {tasks?.items.map((task, idx) => {
        let nextTaskAvailable:
          | GetProjectDetail_project_template_taskTab_items_tasks_items
          | undefined
        for (let i = 0; i < (task.quantity || 0); i++) {
          const currentTask = task.tasks?.items?.[i]
          const currentMedia = currentTask?.media?.items?.[0]?.media
          if (!currentMedia) {
            nextTaskAvailable = currentTask
          }
        }
        function selectWithoutTask() {
          setSelectedTemplate(task.taskTemplate)
        }
        function select() {
          setTaskId(nextTaskAvailable?.id)
          setSelectedTemplate(task.taskTemplate)
        }

        return (
          <div
            key={`${idx}-${task.id}`}
            className='mt-2 border-l border-r border-gray-300'
          >
            <Accordion defaultIndex={[0]} allowMultiple className='mb-6'>
              <AccordionItem>
                <div className='flex justify-between'>
                  <div
                    className='w-4/5 py-4 pl-4 cursor-pointer'
                    onClick={select}
                  >
                    <h4 className='text-xl font-semibold mb-1'>
                      {task.taskTemplate?.name}
                    </h4>
                    <Tag>
                      <TagLabel>{task.requirement}</TagLabel>
                    </Tag>
                  </div>
                  <div className='w-1/5 my-4 flex justify-end'>
                    <AccordionButton className='w-12'>
                      <AccordionIcon />
                    </AccordionButton>
                  </div>
                </div>
                <AccordionPanel pb={4}>
                  {Array(task.quantity)
                    .fill(0)
                    .map((_, idx) => {
                      const currentTask = task.tasks?.items?.[idx]
                      const currentMedia = currentTask?.media?.items?.[0]?.media
                      function click() {
                        // onOpenModal(currentTask?.id)
                        setTaskId(currentTask?.id)
                        selectWithoutTask()
                      }

                      return (
                        <div
                          key={`row-${idx}`}
                          className='flex justify-between my-2'
                        >
                          <div>
                            {idx + 1}. {currentTask?.status}
                            {/* {currentTask?.id} */}
                          </div>
                          <div>
                            {currentMedia ? (
                              <p>
                                {currentMedia?.owner?.firstName}{' '}
                                {currentMedia.owner?.lastName}
                              </p>
                            ) : (
                              ''
                            )}
                          </div>
                          <div>
                            {currentMedia ? (
                              <MediaView
                                mediaUrl={currentMedia.url}
                                posterUrl={currentMedia.thumbnailUrl}
                                center
                              >
                                {(onOpen) => (
                                  <Button onClick={onOpen}>View</Button>
                                )}
                              </MediaView>
                            ) : (
                              <Button onClick={click}>
                                <Icon as={IoAdd} />
                              </Button>
                            )}
                          </div>
                        </div>
                      )
                    })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        )
      })}
      <TaskTemplatePopup
        template={selectedTemplate}
        isOpen={!!selectedTemplate}
        onClose={() => {
          setSelectedTemplate(null)
        }}
        taskId={taskId}
        refetch={refetch}
        openMediaTab={openMediaTab}
      />
      {/* <CreateMediaPopup
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={onUploadSuccess}
      /> */}
    </div>
  )
}

interface MediaTabProps {
  medias: GetProjectDetail_project_mediaTab_items[]
  loading?: boolean
}

const MediaTab: React.FC<MediaTabProps> = (props) => {
  const { medias, loading } = props
  const userInfo = useUserSession()
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

    return Object.values(ORG_MEDIA_STATUS)
  }

  const [status, setSelectedStatus] = useState<ORG_MEDIA_STATUS[]>(
    initFilterStatus(),
  )
  // useEffect(() => {
  //   router.push(router.pathname, {
  //     query: {
  //       popup: openCard,
  //       filter: status,
  //     },
  //   })
  // }, [openCard, status])

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

  const filteredMedias = useMemo(
    () =>
      medias.filter((m) =>
        m.status ? status.includes(m.status as ORG_MEDIA_STATUS) : false,
      ),
    [medias, status],
  )

  if (loading) {
    return (
      <div className='p-6 w-3/4 max-w-6xl mx-auto'>
        <SkeletonText className='ml-4' noOfLines={6} spacing='4' />
      </div>
    )
  }

  return (
    <>
      <div className='md:max-w-xl lg:max-w-3xl xl:max-w-none flex items-center my-6'>
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
              <PopoverCloseButton className='mb-4' />
              <PopoverBody className='mt-4'>
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
      <div className='my-4'>
        <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
          {filteredMedias.map((item, idx) => {
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
    </>
  )
}

interface WorkerTabProps {
  workers: GetProjectDetail_project_peopleTab_items[]
  loading?: boolean
}

const WorkerTab: React.FC<WorkerTabProps> = (props) => {
  const { workers, loading } = props

  const renderWorkers = useMemo(() => {
    if (loading) {
      return (
        <div className='flex flex-wrap justify-between'>
          <div className='my-1 px-4 w-full'>
            <Box padding='4' boxShadow='lg' bg='white'>
              <SkeletonText mt='2' noOfLines={2} spacing='4' />
            </Box>
          </div>
          <div className='my-1 px-4 w-full'>
            <Box padding='4' boxShadow='lg' bg='white'>
              <SkeletonText mt='2' noOfLines={2} spacing='4' />
            </Box>
          </div>
          <div className='my-1 px-4 w-full'>
            <Box padding='4' boxShadow='lg' bg='white'>
              <SkeletonText mt='2' noOfLines={2} spacing='4' />
            </Box>
          </div>
        </div>
      )
    }

    return (
      <div className='container my-4 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap'>
          {workers?.map((item) => {
            return (
              <div
                key={item.user?.id as string}
                className='my-4 px-4 py-3 w-full lg:w-1/2'
              >
                <Link href={`${Pages.Worker}/${item.user?.id}`}>
                  <div className='relative px-4 py-4 sm:px-6 rounded-lg shadow-lg hover:bg-gray-100'>
                    <div className='flex items-center justify-between pr-8 md:pr-12'>
                      <a className='text-xl font-medium text-black truncate md:text-2xl'>
                        {item.user?.firstName} {item.user?.lastName}
                      </a>

                      <div className='ml-2 flex-shrink-0 flex'>
                        <p className='inline-flex leading-5 font-semibold md:text-lg'>
                          {item.user?.media?.count} Videos
                        </p>
                      </div>
                    </div>
                    <div className='mt-2 flex items-center justify-between pr-8 md:pr-12'>
                      <div className='inline'>
                        <p className='inline text-sm'>
                          {item?.tags?.items?.map((tag, idx) => {
                            return (
                              <span
                                key={`${tag.name}-${idx}`}
                                className='inline-flex items-center mx-1 px-3 py-0.5 rounded-full md:text-xl font-medium bg-green-300 text-gray-800'
                              >
                                {tag?.name}
                              </span>
                            )
                          })}
                        </p>
                      </div>
                      <div className='mt-2 flex items-center font-semibold md:text-lg'>
                        <p>{item.user?.user_project?.count} Projects</p>
                      </div>
                    </div>
                    <Icon
                      as={IoChevronForwardSharp}
                      className='absolute top-10 right-4 text-2xl'
                    />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }, [workers, loading])

  return (
    <>
      <div className='container flex justify-between my-4'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-semibold mr-3'>People</h1>
          <IoFilter className='' />
        </div>
      </div>
      {renderWorkers}
    </>
  )
}
