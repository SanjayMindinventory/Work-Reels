import React, { memo } from 'react'
import { Box, Icon, Tag, TagLabel } from '@chakra-ui/react'
import { IoClose } from 'react-icons/io5'
import { TemplateProps } from './create-project'

type ReviewDeliverablesProps = TemplateProps

/* eslint-disable react/display-name */
export const ReviewDeliverables: React.FC<ReviewDeliverablesProps> = memo(
  (props) => {
    const { template } = props

    return (
      <div className='px-2 md:px-6'>
        <p>{template.uses}</p>
        <div className='mb-4'>
          {template.deliverables?.items.map((delv) => (
            <Box key={delv.id} shadow='lg' padding='4' className='my-4'>
              <h4 className='mb-4 text-lg font-semibold'>{delv.name}</h4>
              <div className='flex'>
                <div className='w-2/3'>
                  <Tag colorScheme='blue'>
                    <TagLabel>15 secs</TagLabel>
                  </Tag>
                  <Tag colorScheme='blue' className='ml-2'>
                    <TagLabel>.MOV</TagLabel>
                  </Tag>
                </div>
                <div className='w-1/3 flex justify-end'>
                  <p>
                    <Icon as={IoClose} />
                    {delv.quantity}
                  </p>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </div>
    )
  },
)
