import React, { ReactNode } from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
// import ReactPlayer from 'react-player'
import cn from 'classnames'
import { VideoPlayer } from 'components/video-player/video-player'
import { css } from 'linaria'

interface Media {
  id: string | null
  createdAt: any | null
  updatedAt: any | null
  url: string | null
  /**
   * File location
   */
  fileName: string | null
  size: number | null
  mimeType: string | null
  status: string | null
}

interface Props {
  title?: string
  media?: Media
  mediaUrl?: string | null
  posterUrl?: string | null
  center?: boolean
  children: (onOpen: () => void, onClose: () => void) => ReactNode
}

export const MediaView: React.FC<Props> = (props) => {
  const { title, children, mediaUrl, media, center, posterUrl } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent className='max-w-md md:max-w-4xl md:mt-24 mx-2'>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className={cn([{ 'mx-auto': center }])}>
                {isOpen && (
                  <VideoPlayer
                    url={mediaUrl || media?.url || ''}
                    posterUrl={posterUrl as string}
                    className={css`
                      height: auto;
                    `}
                    playerClassName={cn([
                      'mx-auto',
                      css`
                        width: 480px;
                        height: 300px;
                      `,
                    ])}
                  />
                )}

                {/* <ReactPlayer
                  controls
                  //light
                  url={mediaUrl || media?.url || ''}
                  width='324px'
                  height='576px'
                  style={
                    center ? { marginLeft: 'auto', marginRight: 'auto' } : {}
                  }
                /> */}
              </div>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      {children(onOpen, onClose)}
    </>
  )
}
