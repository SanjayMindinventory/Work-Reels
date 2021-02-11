import React, { memo } from 'react'
import { Box, Icon, Tag, TagLabel } from '@chakra-ui/react'
import { IoClose } from 'react-icons/io5'
import { TemplateProps } from './create-project'

interface ReviewProps extends TemplateProps {
  togglePrevious(): void
}

/* eslint-disable react/display-name */
export const ReviewTask: React.FC<ReviewProps> = memo((props) => {
  const { template } = props

  return (
    <div className='px-2 md:px-6'>
      <p>{template.tips}</p>
      <div className='mb-4'>
        {template.linkedTaskTemplates?.items.map((task) => (
          <Box key={task.id} shadow='lg' padding='4' className='my-4'>
            <h4 className='font-semibold text-lg md:text-2xl'>
              {task.taskTemplate?.name}
            </h4>
            <div className='flex'>
              <div className='w-2/3'>
                <Tag colorScheme='blue'>
                  <TagLabel>{task.requirement}</TagLabel>
                </Tag>
              </div>
              <div className='w-1/3 flex justify-end'>
                <p>
                  <Icon as={IoClose} />
                  {task.quantity}
                </p>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </div>
  )
})
