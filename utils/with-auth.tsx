import { getAccessToken } from 'components/utils/utils'
import { NextPage, NextPageContext } from 'next'
import router from 'next/router'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withAuth = (Page: NextPage<any, any>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  class PrivateRoute extends React.Component<any, any> {
    static async getInitialProps(ctx: NextPageContext) {
      let pageProps = {}

      if (typeof Page.getInitialProps === 'function') {
        pageProps = await Page.getInitialProps(ctx)
      }

      return pageProps
    }

    componentDidMount() {
      const accessToken = getAccessToken()

      if (!accessToken && router.pathname !== '/') {
        router.push('/login', '/login')
      }
    }

    render() {
      return <Page {...this.props} />
    }
  }
