import React, { useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Icon, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useMutation, useQuery } from '@apollo/client'
import { MUTATION, QUERY } from '../../lib/graphql'
import {
  UserUploadMediaOfOrg,
  UserUploadMediaOfOrgVariables,
} from '../../lib/graphql/types'
import {
  IoHomeSharp,
  IoList,
  IoPersonOutline,
  IoAddCircleOutline,
} from 'react-icons/io5'
import { Pages } from 'components/nav/pages'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useIsAdminUser, useUserSession } from 'utils/hooks'
import { ORG_MEDIA_STATUS, QuickTimeVideoExt, workflowId } from 'lib/constants'

const Picker = dynamic(() => import('../../components/picker/picker'), {
  ssr: false,
})

export const BottomNav: React.FC = (props) => {
  const router = useRouter()
  const userInfo = useUserSession()
  const isAdmin = useIsAdminUser()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [uploadVideo] = useMutation<
    UserUploadMediaOfOrg,
    UserUploadMediaOfOrgVariables
  >(MUTATION.USER_UPLOAD_MEDIA_OF_ORG)

  const filter =
    (router.query.filter as ORG_MEDIA_STATUS | ORG_MEDIA_STATUS[]) || []

  const filterStatus = useMemo(() => {
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
  }, [filter])

  const onUploadSuccess = useCallback(
    (res: any) => {
      const uploadedItem = res?.filesUploaded?.[0]
      if (uploadedItem && uploadedItem.filename && uploadedItem.url) {
        const {
          filename,
          mimetype,
          size,
          url,
          originalFile,
          workflows,
        } = uploadedItem
        uploadVideo({
          variables: {
            fileName: filename,
            url,
            ownerId: userInfo?.id,
            mimeType: mimetype,
            size,
            workflowJobId: workflows?.[workflowId]?.jobid,
            orgId: userOrgId,
            isProcessing:
              originalFile?.type === QuickTimeVideoExt &&
              workflows?.[workflowId]?.jobid
                ? 1
                : 0,
          },
          refetchQueries: [
            {
              query: QUERY.GET_ORG_MEDIAS,
              variables: {
                filter: {
                  ...(!isAdmin
                    ? {
                        media: {
                          owner: {
                            id: {
                              equals: userInfo?.id,
                            },
                          },
                        },
                      }
                    : {}),
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
            },
          ],
        }).then(({ data }) => {
          const flipInfo = `popup=${data?.orgMediaCreate?.media?.id}`
          router.push(`${Pages.Video}?${flipInfo}`)
        })
      }

      //
    },
    [uploadVideo, isAdmin, userOrgId, userInfo, filterStatus, onClose],
  )

  const toast = useToast()
  const openModal = useCallback(() => {
    if (!userInfo) {
      return toast({
        title: 'Before posting a video you had to login first',
        position: 'top-right',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
    if (!userOrgId) {
      return toast({
        title: 'You need to be in an organization',
        position: 'top-right',
        description: 'To post a video you must be in an organization',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }

    onOpen()
  }, [onOpen, userInfo, userOrgId, toast])

  return (
    <div
      className={`${
        !userInfo ? 'hidden' : ''
      } bottomNav fixed bottom-0 w-full bg-white`}
    >
      <nav
        // style='border:1px solid blue'
        className='md:hidden border-t border-gray-200 bottom-0 w-full text-xs'
      >
        <ul className='flex justify-around items-center text-center font-bold py-4'>
          <li className='w-1/4 py-2 hover:bg-gray-300'>
            <Link href='/video'>
              <a>
                <Icon className='text-2xl' as={IoHomeSharp} />
              </a>
            </Link>
          </li>
          <li className='w-1/4 py-2 hover:bg-gray-300'>
            <Link href='/project'>
              <a>
                <Icon className='text-2xl' as={IoList} />
              </a>
            </Link>
          </li>
          <li className='w-1/4 py-2 hover:bg-gray-300'>
            {/* <Link href={`${Pages.Worker}`}> */}
            {/* <Link href={`${Pages.Worker}`}> */}
            <Link href='/login'>
              <a>
                <Icon className='text-2xl' as={IoPersonOutline} />
              </a>
            </Link>
          </li>
          <li className='w-1/4 py-2 hover:bg-gray-300'>
            <a href='#' onClick={openModal}>
              <Icon className='text-2xl' as={IoAddCircleOutline} />
            </a>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent className='max-w-md md:max-w-4xl md:mt-24 mx-2'>
            <ModalHeader>Add Media</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} className='px-0 md:px-unset'>
              <Picker onSuccess={onUploadSuccess}>
                <button>Upload button</button>
              </Picker>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </div>
  )
}
