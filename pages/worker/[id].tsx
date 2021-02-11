import React, { memo, useCallback, useMemo, useState } from 'react'
import { Head } from '../../components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { QUERY } from 'lib/graphql'
import { useQuery } from '@apollo/client'
import { Box, Flex, Icon, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { BsFunnel } from 'react-icons/bs'
import cn from 'classnames'
import { BottomNav } from 'components/bottom-nav/bottom-nav'
import { useRouter } from 'next/router'
import { GetWorkerInfo, GetWorkerInfoVariables } from 'lib/graphql/types'
import { withAuth } from 'utils/with-auth'

enum Tabs {
  Videos = 'Videos',
  Projects = 'Projects',
  About = 'About',
}

const WorkerDetails: NextPage<any> = (props) => {
  const router = useRouter()
  const { id = '' } = router.query
  // state of tabs
  const [openTab, setOpenTab] = useState<Tabs>(Tabs.About)

  if (typeof id !== 'string' || !id) {
    return (
      <Layout>
        <Head title='Worker | WorkReels' />
        <h1>Not found worker</h1>
      </Layout>
    )
  }

  const { data, loading } = useQuery<GetWorkerInfo, GetWorkerInfoVariables>(
    QUERY.GET_WORKER_INFO,
    {
      variables: {
        userId: id,
      },
    },
  )

  const userTagsRenders = useMemo(() => {
    const tags: string[] = []
    data?.user?.worker?.items?.forEach((workerItem) => {
      workerItem.tags?.items?.forEach((item) => {
        if (item.name) {
          tags.push(item.name)
        }
      })
    })
    return tags.map((tag) => (
      <span
        key={tag}
        className='inline-flex items-center mx-1 px-3 py-0.5 rounded-full md:text-xl font-medium bg-green-300 text-gray-800'
      >
        {tag}
      </span>
    ))
  }, [data])

  const workerName = useMemo(() => {
    return `${data?.user?.firstName} ${data?.user?.lastName}`
  }, [data])

  return (
    <Layout>
      <Head title={`${workerName} | WorkReels`} />
      <div className='container flex justify-between px-6 pt-4 md:px-14'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-semibold mr-3 lg:text-3xl'>
            {loading ? <NameSkeleton /> : workerName}
          </h1>
        </div>
      </div>
      <div className='container mt-4 mx-auto px-4 md:px-12'>
        {!loading && userTagsRenders}
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

        {openTab === Tabs.Videos && <div className='videos'>Videos</div>}
        {openTab === Tabs.Projects && <div className='projects'>Projects</div>}
        {openTab === Tabs.About && <div className='about'>About</div>}
      </div>
      <BottomNav />
    </Layout>
  )
}

export default withAuth(WorkerDetails)

const NameSkeleton: React.FC = () => (
  <Flex padding='2' bg='white' alignItems='center'>
    <SkeletonCircle size='10' />
    <SkeletonText className='ml-4 w-40' noOfLines={2} spacing='4' />
  </Flex>
)

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

const IoFilter: React.FC<{ className?: string }> = (props) => {
  return (
    <span className={cn(['', props.className])}>
      <Icon as={BsFunnel} className='inline-block text-lg ' />
      <Icon as={IoChevronDownOutline} className='inline-block mr-4' />
    </span>
  )
}
