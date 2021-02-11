import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Box,
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
  TagLabel,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { IoAdd, IoArrowBack } from 'react-icons/io5'
import { useLazyQuery, useMutation } from '@apollo/client'
import { MUTATION, QUERY } from 'lib/graphql'
import {
  GetProjectTemPlateList,
  GetProjectTemPlateList_projectTemplatesList_items,
  CreateProject as CreateProjectTypes,
  CreateProjectVariables,
  CreateProjectTask,
  CreateProjectTaskVariables,
  TaskCreateManyInput,
} from 'lib/graphql/types'
import { IoArrowForward } from 'react-icons/io5'
import { ReviewDeliverables } from './review-deliverables'
import { AddPeople } from './add-people-projec'
import { ReviewTask } from './review-task'
import { useUserSession } from 'utils/hooks'

interface Props {
  refetchProjects?(): any
}

export const CreateProject: React.FC<Props> = (props) => {
  const { refetchProjects } = props
  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isFetched = useRef<boolean>(false)
  const [template, setTemplate] = useState<
    GetProjectTemPlateList_projectTemplatesList_items | undefined
  >()
  const [workerIds, setWorkerIds] = useState<string[]>([])
  const addPeopleRef = useRef<any>()

  const [fetch, { data, loading }] = useLazyQuery<GetProjectTemPlateList>(
    QUERY.GET_PROJECT_TEMPLATE_LIST,
  )

  const templates = useMemo(() => data?.projectTemplatesList?.items || [], [
    data,
  ])
  const [createProject, { loading: createLoading }] = useMutation<
    CreateProjectTypes,
    CreateProjectVariables
  >(MUTATION.PROJECT_CREATE)
  const [createProjectTask] = useMutation<
    CreateProjectTask,
    CreateProjectTaskVariables
  >(MUTATION.CREATE_PROJECT_TASK)

  const showErrMsg = useCallback(
    (title, msg) =>
      toast({
        title,
        position: 'top-right',
        description: msg,
        status: 'error',
        duration: 5000,
        isClosable: true,
      }),
    [toast],
  )

  const onCreateProject = useCallback(() => {
    if (!template?.id) {
      console.log('Template id not found ', template?.id)
      return
    }
    createProject({
      variables: {
        templateId: template?.id,
        workerId: workerIds?.map((id) => ({ id })),
        orgId: userOrgId,
        name: template?.name,
      },
    })
      .then(({ data }) => {
        const projectId = data?.projectCreate.id
        const vars: TaskCreateManyInput[] = []
        data?.projectCreate.template?.linkedTaskTemplates?.items?.forEach(
          (taskTemplate) => {
            for (let i = 0; i < (taskTemplate.quantity || 0); i++) {
              vars.push({
                project: {
                  connect: {
                    id: projectId,
                  },
                },
                template: {
                  connect: {
                    id: taskTemplate.id,
                  },
                },
              })
            }
          },
        )
        createProjectTask({
          variables: {
            tasks: vars,
          },
        })
          .then(() => {
            refetchProjects && refetchProjects()
            toast({
              title: 'Create project successfully!',
              position: 'top-right',
              status: 'success',
              duration: 5000,
              isClosable: true,
            })
            onClose()
          })
          .catch(({ graphQLErrors }) => {
            const msg = graphQLErrors
              .map((err: any) => err.message.replace('ValidationError: ', ''))
              .join(';')
            showErrMsg('Create project failed!', msg)
          })
      })
      .catch(({ graphQLErrors }) => {
        const msg = graphQLErrors
          .map((err: any) => err.message.replace('ValidationError: ', ''))
          .join(';')
        showErrMsg('Create project failed!', msg)
      })
  }, [template, workerIds, toast, showErrMsg])

  useEffect(() => {
    if (isFetched.current || !isOpen) {
      return
    }
    fetch()

    if (!isFetched.current) {
      isFetched.current = true
    }
  }, [isOpen])

  const [count, setCount] = useState<number>(0)

  /**
    Reset modal state when close
   */
  useEffect(() => {
    if (!isOpen) {
      setCount(0)
    }
  }, [isOpen, setCount])

  const toggleNextTab = useCallback(
    () => setCount((v) => (v < 3 ? (v += 1) : v)),
    [setCount],
  )
  const togglePrevious = useCallback(
    () => setCount((v) => (v > 0 ? (v -= 1) : v)),
    [setCount],
  )

  const toggleTemplate = useCallback(
    (t) => {
      setTemplate(t)
      toggleNextTab()
    },
    [setTemplate, toggleNextTab],
  )
  // worker handling
  const selectNonePeople = useCallback(() => {
    addPeopleRef.current?.selectNone?.()
  }, [])
  const selectAllPeople = useCallback(() => {
    addPeopleRef.current?.selectAll?.()
  }, [])
  const onUpdateWorkerIds = useCallback((val) => setWorkerIds(val), [
    setWorkerIds,
  ])
  const renderModalHeader = (count: number) => {
    switch (count) {
      case 0:
        return 'Lets start by selecting a project template'
      case 1:
        return 'Once you are done, these are the videos we will edit together'
      case 2:
        return 'These are the video tasks for this project'
      case 3:
        return 'Now lets choose who should help with filming'
      default:
        return ''
    }
  }

  const renderModalHeaderExtra = (count: number) => {
    if (count == 1 || count == 2) {
      return (
        <span className='italic text-sm ml-1'>
          (click Next after reviewing)
        </span>
      )
    }
  }

  return (
    <>
      <Button className='' onClick={onOpen}>
        <Icon as={IoAdd} className='mr-1' />
        New Project
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent className='max-w-xs md:max-w-4xl md:mt-24 md:mx-6 pt-6 relative'>
            <ModalHeader className='px-4 pb-0 md:px-10'>
              <span>{renderModalHeader(count)}</span>
              {renderModalHeaderExtra(count)}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} className='px-2 md:px-4'>
              {loading && <LoadingBoxes />}

              {/* <Button onClick={toggleNextTab}>Move</Button>
              <Button onClick={togglePrevious}>Previous</Button> */}
              <div className='tabs__wrapper md:mt-2 mb-12'>
                <div className='tabs _inliner' data-tab={count % 4}>
                  {count === 0 ? (
                    <div className='md:px-6'>
                      {!loading &&
                        templates.map((template) => (
                          <ProjectCard
                            key={template.id}
                            template={template}
                            onSelect={toggleTemplate}
                          />
                        ))}
                    </div>
                  ) : (
                    <div />
                  )}
                  {count === 1 ? (
                    template && <ReviewDeliverables template={template} />
                  ) : (
                    <div></div>
                  )}
                  {count === 2 ? (
                    <div>
                      {template && (
                        <ReviewTask
                          template={template}
                          togglePrevious={togglePrevious}
                        />
                      )}
                    </div>
                  ) : (
                    <div />
                  )}
                  {count === 3 ? (
                    template && (
                      <AddPeople
                        template={template}
                        ref={(ref) => (addPeopleRef.current = ref)}
                        onUpdate={onUpdateWorkerIds}
                      />
                    )
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </ModalBody>
            {count > 0 && (
              <div className='bottom-0 left-0 border-t-2 border-gray-200 bg-white w-full py-4 px-4 md:px-10 flex justify-between items-center'>
                <div className='flex items-center'>
                  <Button
                    className='text-sm px-2 mr-1 md:text-md md:px-4'
                    onClick={togglePrevious}
                  >
                    <Icon as={IoArrowBack} />
                    {'\u00A0'} Previous
                  </Button>
                  {count === 3 && (
                    <div className='flex justify-center md:ml-8'>
                      <Button
                        size='sm'
                        colorScheme='teal'
                        variant='ghost'
                        className='text-sm px-1 mr-1 md:mr-4 md:text-md md:px-4'
                        onClick={selectAllPeople}
                      >
                        Select All
                      </Button>
                      <Button
                        size='sm'
                        colorScheme='teal'
                        variant='ghost'
                        className='text-sm px-1 md:text-md md:px-4'
                        onClick={selectNonePeople}
                      >
                        None
                      </Button>
                    </div>
                  )}
                </div>
                {count !== 3 ? (
                  <Button
                    className='text-sm px-2 md:text-md md:px-4'
                    onClick={toggleNextTab}
                  >
                    Next {'\u00A0'}
                    <Icon as={IoArrowForward} />
                  </Button>
                ) : (
                  <Button
                    className='text-sm px-2 md:text-md md:px-4'
                    colorScheme='teal'
                    onClick={onCreateProject}
                    isLoading={createLoading}
                  >
                    Done
                  </Button>
                )}
              </div>
            )}
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}

const LoadingBoxes: React.FC = () => (
  <>
    {Array(3)
      .fill(0)
      .map((item, idx) => (
        <Box key={`loading-${idx}`} className='w-full my-4'>
          <SkeletonText noOfLines={3} spacing='4' />
        </Box>
      ))}
  </>
)

export interface TemplateProps {
  template: GetProjectTemPlateList_projectTemplatesList_items
}
interface ProjectProps extends TemplateProps {
  onSelect(t: GetProjectTemPlateList_projectTemplatesList_items): void
}

/* eslint-disable react/display-name */
const ProjectCard: React.FC<ProjectProps> = memo((props) => {
  const { template, onSelect } = props
  function select() {
    onSelect(template)
  }
  return (
    <Box
      key={template.id}
      shadow='lg'
      className='mb-8 cursor-pointer'
      onClick={select}
    >
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h4 className='font-semibold text-lg md:text-2xl'>{template.name}</h4>
          <Icon as={IoArrowForward} role='button' className='hover-cursor' />
        </div>
        <div className='mb-4'>
          {template.tags?.items?.map((tag) => (
            <Tag
              key={tag.id}
              colorScheme='green'
              className='mr-4 my-1 md:my-0 md:text-lg'
            >
              <TagLabel>{tag.name}</TagLabel>
            </Tag>
          ))}
        </div>
        <div className='flex md:text-xl'>
          <div className='w-2/3 flex flex-col justify-between md:flex-row'>
            <p>{template.linkedTaskTemplates?.count || 'unknown'} tasks</p>
            <p>{template.deliverables?.count || 'unknown'} deliverables</p>
          </div>
          <div className='flex justify-end w-1/3'>
            <Tag colorScheme='green' className='py-1 md:py-3'>
              <TagLabel>$0</TagLabel>
            </Tag>
          </div>
        </div>
        <p className='mt-4'>{template.description}</p>
      </div>
    </Box>
  )
})
