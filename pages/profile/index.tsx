import React, { useEffect } from 'react'
import { Head } from '../../components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { useRouter } from 'next/router'
import { TOKEN_NAME } from 'lib/constants'
import { withAuth } from 'utils/with-auth'

const ProfilePage: NextPage<any> = (props) => {
  const router = useRouter()

  return (
    <Layout profilePage>
      <Head title='Profile' />
    </Layout>
  )
}

export default withAuth(ProfilePage)
