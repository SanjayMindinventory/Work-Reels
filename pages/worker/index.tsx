import React, { useEffect, useMemo } from 'react'
import { Head } from '../../components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { QUERY } from 'lib/graphql'
import { useLazyQuery } from '@apollo/client'
import { GetWorkers, GetWorkersVariables } from 'lib/graphql/types'
import { Box, Button, Icon, SkeletonText } from '@chakra-ui/react'
import {
  IoChevronDownOutline,
  IoAdd,
  IoChevronForwardSharp,
} from 'react-icons/io5'
import { BsFunnel } from 'react-icons/bs'
import cn from 'classnames'
import { BottomNav } from 'components/bottom-nav/bottom-nav'
import Link from 'next/link'
import { Pages } from 'components/nav/pages'
import { useUserSession } from 'utils/hooks'
import { withAuth } from 'utils/with-auth'

const Workers: NextPage<any> = (props) => {
  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])

  const [fetch, { data, loading }] = useLazyQuery<
    GetWorkers,
    GetWorkersVariables
  >(QUERY.GET_WORKERS, {
    variables: {
      orgId: userOrgId,
    },
  })
  useEffect(() => {
    if (userOrgId) {
      fetch()
    }
  }, [fetch, userOrgId])

  const renderWorkers = useMemo(() => {
    if (loading) {
      return (
        <div className='flex flex-wrap justify-between'>
          <div className='my-1 px-4 w-full'>
            <Box padding='4' boxShadow='lg' bg='white'>
              <SkeletonText mt='2' noOfLines={2} spacing='4' />
            </Box>
          </div>
          <div className='my-1 px-4 w-full'>
            <Box padding='4' boxShadow='lg' bg='white'>
              <SkeletonText mt='2' noOfLines={2} spacing='4' />
            </Box>
          </div>
          <div className='my-1 px-4 w-full'>
            <Box padding='4' boxShadow='lg' bg='white'>
              <SkeletonText mt='2' noOfLines={2} spacing='4' />
            </Box>
          </div>
        </div>
      )
    }

    return (
      <div className='container my-4 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap'>
          {data?.workersList?.items?.map((item) => {
            return (
              <div
                key={item.user?.id as string}
                className='my-4 px-4 py-3 w-full lg:w-1/2'
              >
                <Link href={`${Pages.Worker}/${item.user?.id}`}>
                  <div className='relative px-4 py-4 sm:px-6 rounded-lg shadow-lg hover:bg-gray-100'>
                    <div className='flex items-center justify-between pr-8 md:pr-12'>
                      <a className='text-xl font-medium text-black truncate md:text-2xl'>
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
                                  className='inline-flex items-center mx-1 px-3 py-0.5 rounded-full md:text-xl font-medium bg-green-300 text-gray-800'
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
                    <Icon
                      as={IoChevronForwardSharp}
                      className='absolute top-10 right-4 text-2xl'
                    />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }, [data, loading])

  return (
    <Layout>
      <Head title='Workers | WorkReels' />
      <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 flex justify-between lg:px-8'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl '>
            People
          </h1>
          {/* <IoFilter className='' /> */}
        </div>
        <Button className=''>
          <Icon as={IoAdd} className='mr-1' />
          Invite
        </Button>
      </div>
      {renderWorkers}
      <BottomNav />
    </Layout>
  )
}

export default withAuth(Workers)

const IoFilter: React.FC<{ className?: string }> = (props) => {
  return (
    <span className={cn(['', props.className])}>
      <Icon as={BsFunnel} className='inline-block text-lg ' />
      <Icon as={IoChevronDownOutline} className='inline-block mr-4' />
    </span>
  )
}
