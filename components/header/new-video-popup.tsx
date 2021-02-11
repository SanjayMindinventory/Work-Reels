import React, { useCallback, useMemo } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useMutation, useQuery } from '@apollo/client'
import { MUTATION, QUERY } from '../../lib/graphql'
import {
  UserUploadMediaOfOrg,
  UserUploadMediaOfOrgVariables,
} from '../../lib/graphql/types'
import { useRouter } from 'next/router'
import { Pages } from '../nav/pages'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useIsAdminUser, useUserSession } from 'utils/hooks'
import { ORG_MEDIA_STATUS, QuickTimeVideoExt, workflowId } from 'lib/constants'

const Picker = dynamic(() => import('../../components/picker/picker'), {
  ssr: false,
})

export const CreateVideoPopup: NextPage<any> = (props) => {
  const router = useRouter()
  const userInfo = useUserSession()
  const isAdmin = useIsAdminUser()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])

  const { isOpen, onOpen, onClose } = useDisclosure()

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

  const [uploadVideo] = useMutation<
    UserUploadMediaOfOrg,
    UserUploadMediaOfOrgVariables
  >(MUTATION.USER_UPLOAD_MEDIA_OF_ORG)

  const onUploadSuccess = useCallback(
    (res: any) => {
      console.log('🚀 ~ res', res)
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
          onClose()
        })
      }

      //
    },
    [userInfo, uploadVideo, isAdmin, userOrgId, filterStatus, onClose],
  )

  const toast = useToast()
  const openModal = useCallback(() => {
    if (!userInfo) {
      return toast({
        title: 'You need to login',
        position: 'top-right',
        description: 'To post a video you must login first',
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
    <>
      <button
        type='button'
        onClick={openModal}
        className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
        <span>New Video</span>
      </button>
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
    </>
  )
}
