import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SkeletonText,
  Tag,
  Tooltip,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import _uniq from 'lodash.uniq'
import _groupby from 'lodash.groupby'
import {
  GetProjectDetail_project_template_taskTab_items_taskTemplate,
  UserCreateMediaOrg,
  UserCreateMediaOrgVariables,
  TaskUpdateDone,
  TaskUpdateDoneVariables,
  GetProjectTemplatePointersVariables,
  GetProjectTemplatePointers,
  GetProjectTemplatePointers_taskTemplate_tags_items_pointers_items,
} from 'lib/graphql/types'
import { CreateMediaPopup } from 'components/create-media-popup/create-media-popup'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { useUserSession } from 'utils/hooks'
import { MUTATION, QUERY } from 'lib/graphql'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { MdFileUpload } from 'react-icons/md'
import { useRouter } from 'next/router'
import { css } from 'linaria'
import { PointerCategory, QuickTimeVideoExt, workflowId } from 'lib/constants'

const Picker = dynamic(() => import('../../components/picker/picker'), {
  ssr: false,
})
const FileUploadOptions = {
  maxFiles: 1,
  accept: 'video/*',
}

interface UploadedTypes {
  filename: string
  mimetype: string
  size: number
  url: string
}

interface Props {
  isOpen: boolean
  onClose(): void
  template?: GetProjectDetail_project_template_taskTab_items_taskTemplate | null
  taskId?: string | null
  refetch: any
  openMediaTab(): void
}

const Tabs = {
  Details: 0,
  'Get Ready': 1,
  'When Filming': 2,
}

export const TaskTemplatePopup: React.FC<Props> = (props) => {
  const router = useRouter()
  const toast = useToast()
  const { id: projectId = '' } = router.query
  const { isOpen, onClose, template, taskId, refetch, openMediaTab } = props
  const [openTab, setOpenTab] = useState<number>(Tabs.Details)
  const {
    isOpen: isOpenUpload,
    onOpen: onOpenUpload,
    onClose: onCloseUpload,
  } = useDisclosure()
  const isFetched = useRef<boolean>(false)

  useEffect(() => {
    if (!isOpen) {
      setOpenTab(Tabs.Details)
    }
  }, [isOpen, setOpenTab])

  const [
    fetchTemplatePointers,
    { data, loading: loadingPointers },
  ] = useLazyQuery<
    GetProjectTemplatePointers,
    GetProjectTemplatePointersVariables
  >(QUERY.GET_PROJECT_TEMPLATE_POINTERS)

  useEffect(() => {
    if (!template?.id) {
      return
    }
    fetchTemplatePointers({
      variables: {
        templateId: template?.id as string,
      },
    })

    if (!isFetched.current) {
      isFetched.current = true
    }
  }, [isOpen, template])

  const pointers = useMemo(() => {
    const p: GetProjectTemplatePointers_taskTemplate_tags_items_pointers_items[] = []
    data?.taskTemplate?.tags?.items?.forEach((tag) => {
      if (tag.pointers?.items) {
        p.push(...tag.pointers?.items)
      }
    })
    return p
  }, [data])

  const toggleNextTab = useCallback(
    () => setOpenTab((v) => (v < 3 ? (v += 1) : v)),
    [setOpenTab],
  )
  const togglePrevious = useCallback(
    () => setOpenTab((v) => (v > 0 ? (v -= 1) : v)),
    [setOpenTab],
  )

  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])
  const userId = useMemo(() => userInfo?.id, [userInfo])

  const [updateTaskDone] = useMutation<TaskUpdateDone, TaskUpdateDoneVariables>(
    MUTATION.TASK_UPDATE_DONE,
  )

  const [uploadVideo] = useMutation<
    UserCreateMediaOrg,
    UserCreateMediaOrgVariables
  >(MUTATION.USER_CREATE_MEDIA_ORG, {
    onCompleted: () => {
      toast({
        title: 'Successfully uploaded to task!',
        position: 'top-right',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      refetch()
      onCloseUpload()
      onClose()
      openMediaTab()
    },
  })

  const onUploadSuccess = useCallback(
    async (val: any) => {
      if (!projectId || !userOrgId || !taskId) {
        console.error(
          `projectId (${projectId}) userOrgId (${userOrgId}) or taskId (${taskId}) undefined`,
        )
        return
      }

      const { filename, mimetype, size, url, originalFile, workflows } = val
      try {
        const { data, errors } = await uploadVideo({
          variables: {
            mediaInput: {
              create: {
                fileName: filename,
                url,
                owner: {
                  connect: {
                    id: userId,
                  },
                },
                mimeType: mimetype,
                size,
                originalMediaUrl: url,
                workflowJobId: workflows?.[workflowId]?.jobid,
                isProcessing:
                  originalFile?.type === QuickTimeVideoExt &&
                  workflows?.[workflowId]?.jobid
                    ? 1
                    : 0,
              },
            },
            taskId: taskId,
            orgId: userOrgId,
          },
        })
        await updateTaskDone({
          variables: {
            taskId,
          },
          refetchQueries: [
            {
              query: QUERY.GET_PROJECT_DETAIL,
              variables: {
                projectId,
              },
            },
          ],
        })
      } catch (error) {
        console.error(error)
      }
    },
    [userId, userOrgId, uploadVideo, projectId, taskId],
  )

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent className='max-w-md md:max-w-4xl md:mt-24 mx-2'>
            <ModalHeader className='pt-4'>
              <div>{template?.name} </div>
              <Tag>{template?.type} </Tag>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} className='px-2 md:px-4'>
              <div className='container mt-4 mx-auto px-4'>
                <div className=''>
                  <div className='border-b border-gray-200'>
                    <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                      {Object.entries(Tabs).map(([key, val]) => {
                        return (
                          <TabTitle
                            key={key}
                            selected={openTab === val}
                            value={val as number}
                            onChange={setOpenTab}
                          >
                            {key}
                          </TabTitle>
                        )
                      })}
                    </nav>
                  </div>
                </div>
                <div className='py-6'>
                  <div className='tabs__wrapper md:mt-4 mb-12'>
                    <div className='tabs _inliner' data-tab={openTab % 3}>
                      {openTab === 0 ? (
                        <Description template={template} />
                      ) : (
                        <div />
                      )}
                      {openTab === 1 ? (
                        loadingPointers ? (
                          <TextLoading />
                        ) : (
                          <div className='md:px-6'>
                            <GetReady pointers={pointers} />
                          </div>
                        )
                      ) : (
                        <div />
                      )}
                      {openTab === 2 ? (
                        loadingPointers ? (
                          <TextLoading />
                        ) : (
                          <div className='md:px-6'>
                            <WhenFilming pointers={pointers} />
                          </div>
                        )
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            {openTab >= 0 && (
              <div className='bottom-0 left-0 border-t-2 border-gray-200 bg-white w-full py-4 px-4 md:px-10 flex justify-between items-center'>
                <div className='flex items-center'>
                  <Button
                    className={`${openTab == 0 ? 'hidden' : ''}`}
                    onClick={togglePrevious}
                  >
                    <Icon as={IoArrowBack} />
                    {'\u00A0'} Previous
                  </Button>
                </div>
                {openTab !== 2 ? (
                  <Button onClick={toggleNextTab}>
                    Next {'\u00A0'}
                    <Icon as={IoArrowForward} />
                  </Button>
                ) : taskId ? (
                  <div>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 border border-transparent rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={onOpenUpload}
                    >
                      <svg
                        className='-ml-1 mr-2 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>Record or Upload</span>
                    </button>
                  </div>
                ) : (
                  <Tooltip label='This project requirement is already completed and has no more tasks left'>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 border border-transparent rounded-md cursor-not-allowed outline-none shadow-none text-white bg-gray-400'
                    >
                      <svg
                        className='-ml-1 mr-2 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>Record or Upload</span>
                    </button>
                  </Tooltip>
                )}
              </div>
            )}
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <CreateMediaPopup
        isOpen={isOpenUpload}
        onClose={onCloseUpload}
        onSuccess={onUploadSuccess}
        // contentClassName='md:max-w-xl'
      />
    </>
  )
}

interface TabTitleProps {
  selected: boolean
  value: number
  onChange(val: number): void
}
/* eslint-disable react/display-name */
const TabTitle: React.FC<TabTitleProps> = memo((props) => {
  const { selected, children, value, onChange } = props

  const onClick = useCallback(() => onChange(value), [value])

  return (
    <span
      role='button'
      className={cn([
        'whitespace-nowrap py-4 px-1 border-b-2 font-medium',
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

type DescriptionProps = Pick<Props, 'template'>

const Description: React.FC<DescriptionProps> = (props) => {
  const { template } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])
  const { data: session } = useQuery(QUERY.GET_LOCAL_SESSION)
  const [uploadVideo] = useMutation<
    UserCreateMediaOrg,
    UserCreateMediaOrgVariables
  >(MUTATION.USER_CREATE_MEDIA_ORG)

  const onUploadSuccess = useCallback(
    (val: any) => {
      if (!userOrgId || !template) {
        console.error(
          `orgId (${userOrgId}) or taskId (${template?.id}) undefined`,
        )
        return
      }

      const { filename, mimetype, size, url } = val
      // uploadVideo({
      //   variables: {
      //     mediaInput: {
      //       create: {
      //         fileName: filename,
      //         url,
      //         owner: {
      //           connect: {
      //             id: session.me.id,
      //           },
      //         },
      //         mimeType: mimetype,
      //         size,
      //       },
      //     },
      //     // TODO: correct taskId
      //     taskId: taskId.current,
      //     orgId: userOrgId,
      //   },
      // })
    },
    [userOrgId, template, uploadVideo],
  )

  return (
    <div>
      <p className='mb-36'>{template?.description || 'description'}</p>
      {/* <div className='absolute left-0 p-4 bottom-0 w-full border-t border-gray-200 flex justify-around'>
        <Button>Example</Button>
        <Button onClick={onOpen}>Record or Upload</Button>
      </div> */}
    </div>
  )
}

const emojiPicker = (name: string) => {
  switch (name) {
    case 'lighting':
      return '💡'
    case 'sound':
      return '🎤'
    case 'scenery':
      return '🖼️'
    case 'camera':
      return '🎥'
    case 'null':
      return '👍'
    default:
      return ''
  }
}

interface PointersProps {
  pointers?: GetProjectTemplatePointers_taskTemplate_tags_items_pointers_items[]
}

const GetReady: React.FC<PointersProps> = (props) => {
  const pointers =
    _groupby(
      props.pointers?.filter((p) => p.category === PointerCategory.GetReady),
      'type',
    ) || {}

  return (
    <div>
      {Object.entries(pointers).map(([key, val], idx) => {
        return (
          <div key={`${key}-${idx}`}>
            <span className='text-xl font-semibold capitalize'>
              {emojiPicker(key)} {key !== 'null' ? key : 'Misc.'}
            </span>
            <ul className='list-disc list-inside mb-4 px-3' key={`prep-${idx}`}>
              {val.map((p) => (
                <li key={`${key}-${p.id}`} className='my-2'>
                  {p.title}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

const WhenFilming: React.FC<PointersProps> = (props) => {
  const pointers =
    _groupby(
      props.pointers?.filter((p) => p.category === PointerCategory.Filming),
      'type',
    ) || {}

  return (
    <div>
      {Object.entries(pointers).map(([key, val], idx) => {
        return (
          <div key={`${key}-${idx}`}>
            <span className='text-xl font-semibold capitalize'>
              {emojiPicker(key)} {key !== 'null' ? key : 'Misc.'}
            </span>
            <ul className='list-disc list-inside mb-4 px-3' key={`prep-${idx}`}>
              {val.map((p) => (
                <li key={`${key}-${p.id}`} className='my-2'>
                  {p.title}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

const TextLoading: React.FC = () => {
  return <SkeletonText mt='2' noOfLines={3} spacing='4' />
}
