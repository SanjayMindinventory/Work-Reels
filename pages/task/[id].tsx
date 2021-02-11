import React from 'react'
import { Head } from '../../components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { QUERY } from 'lib/graphql'
import { useRouter } from 'next/router'
import { GetTaskDetail, GetTaskDetailVariables } from 'lib/graphql/types'
import { useQuery } from '@apollo/client'
import { withAuth } from 'utils/with-auth'

const Task: NextPage<any> = (props) => {
  const router = useRouter()
  const { id = '' } = router.query
  const { data } = useQuery<GetTaskDetail, GetTaskDetailVariables>(
    QUERY.GET_TASK_DETAIL,
    {
      variables: {
        task_id: id as string,
      },
    },
  )
  console.log('🚀 ~ file: [id].tsx ~ line 14 ~ data', data)

  if (typeof id !== 'string' || !id) {
    return (
      <Layout>
        <Head title='Project | WorkReels' />
        <h1>Not found Project</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head title='Task | TwerkFeels' />
      <div className='p-6'>Task</div>
    </Layout>
  )
}

export default withAuth(Task)
