import React, { useEffect } from 'react'
import cn from 'classnames'
import { css } from 'linaria'
import { Header } from 'components/header/header'
import { Head } from 'components/head/head'
import { MUTATION, QUERY } from 'lib/graphql'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { getUserRefreshToken, setUserTokens } from 'utils/hooks'
import { AUTH_PROFILE_ID } from 'lib/constants'

type Props = {
  title?: string
  description?: string
  profilePage?: boolean
}

const Layout: React.FC<Props> = (props) => {
  const { children, title, description } = props

  const client = useApolloClient()
  const { data, loading, refetch } = useQuery(QUERY.GET_USER_INFO)

  const [setLocalSession] = useMutation(MUTATION.SET_LOCAL_SESSION)

  useEffect(() => {
    if (data && data.user) {
      setLocalSession({
        variables: {
          session: { me: data.user },
        },
      })
      const email = data?.user?.email
      const refreshToken = getUserRefreshToken()
      if (refreshToken) {
        try {
          client
            .mutate({
              mutation: MUTATION.GET_REFRESH_TOKEN,
              variables: {
                email,
                refreshToken,
                authProfileId: AUTH_PROFILE_ID,
              },
            })
            .then(({ data }) => {
              const newToken = data?.userRefreshToken?.idToken
              const newRefreshToken = data?.userRefreshToken?.refreshToken
              setUserTokens(newToken, newRefreshToken)
            })
            .catch()
        } catch (error) {
          console.error(error)
        }
      }
    }
  }, [data])

  return (
    <main
      className={cn([
        css`
          min-height: 100%;
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-columns: 100%;
        `,
      ])}
    >
      <Head title={title} description={description} />
      <Header getMeLoading={loading} refetch={refetch} />
      <div className='content h-full'>
        <div
          className={cn([
            css`
              min-height: calc(100vh - 64px);
            `,
            'mx-auto',
          ])}
        >
          {children}
        </div>
      </div>
      <footer />
    </main>
  )
}

export default Layout
