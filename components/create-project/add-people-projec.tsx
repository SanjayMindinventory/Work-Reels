import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { Box, Checkbox, Icon, SkeletonText } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { QUERY } from 'lib/graphql'
import { GetWorkers, GetWorkersVariables } from 'lib/graphql/types'
import cn from 'classnames'
import { css } from 'linaria'
import { TemplateProps } from './create-project'
import { IoChevronDownOutline } from 'react-icons/io5'
import { BsFunnel } from 'react-icons/bs'
import { useUserSession } from 'utils/hooks'

interface AddPeopleProps extends TemplateProps {
  onUpdate(val: string[]): void
}

/* eslint-disable react/display-name */
export const AddPeople = memo(
  forwardRef<any, AddPeopleProps>((props, ref) => {
    const userInfo = useUserSession()
    const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])
    const { onUpdate } = props
    const { data, loading } = useQuery<GetWorkers, GetWorkersVariables>(
      QUERY.GET_WORKERS,
      {
        variables: {
          orgId: userOrgId,
        },
      },
    )
    const [selected, setSelected] = useState<string[]>([])
    const workerIds = data?.workersList.items?.map(
      (worker) => worker.id || '',
    ) || ['']

    useImperativeHandle(
      ref,
      () => ({
        selectNone: () => {
          setSelected([])
        },
        selectAll: () => {
          setSelected(workerIds)
        },
      }),
      [setSelected, workerIds],
    )

    const onSelect = useCallback(
      (val) => {
        if (selected.includes(val)) {
          setSelected((v) => v.filter((id) => id !== val))
          return
        }
        setSelected((v) => [...v, val])
      },
      [selected, selected],
    )

    useEffect(() => onUpdate(selected), [selected])

    return (
      <div className='px-2 md:px-4'>
        {/* <div className='flex items-center'>
          <span className='mr-2'>Filter</span>
          <Icon as={BsFunnel} className='inline-block text-lg ' />
          <IoChevronDownOutline className='' />
        </div> */}
        <div>
          {loading && (
            <div className='flex flex-wrap justify-between'>
              {Array(3)
                .fill(0)
                .map((item, idx) => (
                  <div key={`loading-${idx}`} className='my-1 px-4 w-full'>
                    <Box padding='4' boxShadow='lg' bg='white'>
                      <SkeletonText mt='2' noOfLines={2} spacing='4' />
                    </Box>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div>
          {data?.workersList?.items?.map((item) => {
            function select() {
              onSelect(item.id)
            }
            const checked = selected.includes(item.id || '')

            return (
              <Checkbox
                key={item.id}
                className={cn([
                  'w-full mr-2 my-4',
                  css`
                    .chakra-checkbox__label {
                      width: 100%;
                    }
                  `,
                ])}
                onChange={select}
                isChecked={checked}
              >
                <div className='w-full'>
                  <div className='ml-1 md:ml-4 relative py-4 px-2 md:px-4 rounded-lg shadow-lg hover:bg-gray-100'>
                    <div className='flex items-center justify-between pr-8 md:pr-12'>
                      <a className='text-lg font-medium text-black truncate md:text-2xl'>
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
                          {item.user?.worker?.items?.[0]?.tags?.items?.map(
                            (tag, idx) => {
                              return (
                                <span
                                  key={`${tag.name}-${idx}`}
                                  className='inline-flex items-center mr-1 md:mr-2 px-3 py-0.5 rounded-full md:text-lg font-medium bg-green-300 text-gray-800'
                                >
                                  {tag?.name}
                                </span>
                              )
                            },
                          )}
                        </p>
                      </div>
                      <div className='mt-2 flex items-center font-semibold md:text-lg'>
                        <p>{item.user?.user_project?.count} Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Checkbox>
            )
          })}
        </div>
      </div>
    )
  }),
)
