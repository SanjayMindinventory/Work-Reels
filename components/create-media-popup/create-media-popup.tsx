import React, { useCallback } from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import cn from 'classnames'
import { workflowId } from 'lib/constants'

const Picker = dynamic(() => import('../../components/picker/picker'), {
  ssr: false,
})

interface UploadedTypes {
  filename: string
  mimetype: string
  size: number
  url: string
  originalFile: Record<string, any>
  workflows: Record<string, any>
  workflowId?: string
}

interface Props {
  title?: string
  isOpen: boolean
  onClose(): void
  onSuccess?(data: UploadedTypes): void
  loading?: boolean
  uploadAction?(): Promise<any>
  contentClassName?: string
}
export const CreateMediaPopup: React.FC<Props> = (props) => {
  const { title = 'Add Media', onSuccess, loading, isOpen, onClose } = props

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
        onSuccess &&
          onSuccess({
            filename,
            mimetype,
            size,
            url,
            originalFile,
            workflows,
            workflowId: workflows?.[workflowId]?.jobid,
          })
        onClose()
      }
    },
    [onSuccess, onClose],
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent
          className={cn([
            'max-w-md md:max-w-4xl md:mt-24 mx-2',
            props.contentClassName,
          ])}
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} className='px-0 md:px-unset'>
            <Picker onSuccess={onUploadSuccess}>
              <button>Upload button</button>
            </Picker>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
