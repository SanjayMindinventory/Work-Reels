import React, { useEffect, useMemo } from 'react'
import { Head } from '../../components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { QUERY } from 'lib/graphql'
import { useLazyQuery } from '@apollo/client'
import { GetProjects, GetProjectsVariables } from 'lib/graphql/types'
import { Box, Icon, SkeletonText } from '@chakra-ui/react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { BsFunnel } from 'react-icons/bs'
import cn from 'classnames'
import { BottomNav } from 'components/bottom-nav/bottom-nav'
import { CreateProject } from 'components/create-project/create-project'
import { useUserSession, useIsAdminUser } from 'utils/hooks'
import { ProjectCard } from 'components/project-card/project-card'
import { TaskStatus } from 'lib/constants'
import { withAuth } from 'utils/with-auth'

const Projects: NextPage<any> = (props) => {
  const userInfo = useUserSession()
  const isAdmin = useIsAdminUser()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])

  const [fetch, { data, loading, refetch }] = useLazyQuery<
    GetProjects,
    GetProjectsVariables
  >(QUERY.GET_PROJECTS, {
    fetchPolicy: 'cache-and-network',
  })

  // useEffect(() => {
  //   if (!userInfo || !userOrgIds || userOrgIds.length === 0) {
  //     return
  //   }
  //   fetch({
  //     variables: {
  //       filter: {
  //         org: {
  //           id: {
  //             in: userOrgIds,
  //           },
  //         },
  //       },
  //     },
  //   })
  // }, [fetch, userOrgIds, userInfo])

  useEffect(() => {
    if (!userInfo) {
      return
    }
    if (isAdmin) {
      fetch({
        variables: {
          filter: {
            org: {
              id: {
                in: userOrgId,
              },
            },
          },
        },
      })
      return
    }

    fetch()
  }, [fetch, userInfo, isAdmin, userOrgId])

  const renderProjects = useMemo(() => {
    if (loading) {
      return (
        <div className='flex flex-wrap justify-between'>
          <div className='my-4 px-4 w-full'>
            <Box
              padding='4'
              boxShadow='lg'
              bg='white'
              className='max-w-6xl mx-auto'
            >
              <SkeletonText mt='2' noOfLines={3} spacing='4' />
            </Box>
          </div>
          <div className='my-1 px-4 w-full'>
            <Box
              padding='4'
              boxShadow='lg'
              bg='white'
              className='max-w-6xl mx-auto'
            >
              <SkeletonText mt='2' noOfLines={3} spacing='4' />
            </Box>
          </div>
          <div className='my-1 px-4 w-full'>
            <Box
              padding='4'
              boxShadow='lg'
              bg='white'
              className='max-w-6xl mx-auto'
            >
              <SkeletonText mt='2' noOfLines={3} spacing='4' />
            </Box>
          </div>
        </div>
      )
    }

    const showMessageIfEmpty = (projectCount = 0) => {
      if (projectCount == 0 && isAdmin) {
        return (
          <div className='text-lg md:text-xl flex flex-col items-center text-center'>
            <p className='mb-4'>You have no Projects yet!</p>
            <p>
              Click
              <span className='font-bold text-blue-800'> + New Project</span> to
              start one.
            </p>
          </div>
        )
      } else if (projectCount == 0 && !isAdmin) {
        return (
          <div className='text-lg md:text-xl flex flex-col items-center text-center'>
            <p className='mb-4'>You are not assigned to any projects.</p>
            <p>Contact your organization&apos;s admin.</p>
          </div>
        )
      }
    }

    return (
      <div className='container my-4 mx-auto px-4 md:px-12'>
        {showMessageIfEmpty(data?.projectsList?.items?.length)}
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          {data?.projectsList?.items?.map((item) => {
            const doneTask = item?.tasks?.items?.filter(
              (t) => t.status === TaskStatus.Done,
            ).length

            return (
              <ProjectCard key={item.id} project={item} doneTask={doneTask} />
            )
          })}
        </div>
      </div>
    )
  }, [data, loading])

  return (
    <Layout>
      <Head title='Projects | WorkReels' />
      <div className='flex justify-between max-w-6xl mx-auto pt-12 pb-4 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          {/* <IoFilter className='' /> */}
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Projects
          </h1>
        </div>
        {isAdmin && <CreateProject refetchProjects={refetch} />}
      </div>
      {renderProjects}
      <BottomNav />
    </Layout>
  )
}

export default withAuth(Projects)

const IoFilter: React.FC<{ className?: string }> = (props) => {
  return (
    <span className={cn(['', props.className])}>
      <Icon as={BsFunnel} className='inline-block text-lg ' />
      <Icon as={IoChevronDownOutline} className='inline-block mr-4' />
    </span>
  )
}
