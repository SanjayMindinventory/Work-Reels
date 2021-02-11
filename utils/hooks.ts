import { useMemo } from 'react'
import { useApolloClient, useQuery } from '@apollo/client'
import { TOKEN_NAME, REFRESH_TOKEN_NAME, USER_ROLES } from 'lib/constants'
import { QUERY } from 'lib/graphql'
import { useRouter } from 'next/router'

export const useUserSession = () => {
  const { data: session } = useQuery(QUERY.GET_LOCAL_SESSION)
  const user = useMemo(() => session?.me, [session])

  return user
}

export const useIsAdminUser = () => {
  const user = useUserSession()
  if (!user) {
    return false
  }
  const roles: string[] = user.roles?.items?.map((r: any) => r.name)

  return roles.includes(USER_ROLES.Admin)
}

export const setUserTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(TOKEN_NAME, accessToken)
  localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken)
}

export const clearAccessToken = () => {
  if (process.browser) {
    localStorage.removeItem(TOKEN_NAME)
    localStorage.removeItem(REFRESH_TOKEN_NAME)
  }
}

export const useLogout = () => {
  const client = useApolloClient()
  const router = useRouter()

  return async () => {
    router.push('/login')
    clearAccessToken()
    client.resetStore().then().catch()
    client.cache.gc()
  }
}

export const getUserAccessToken = () => {
  if (process.browser) {
    return localStorage.getItem(TOKEN_NAME)
  }
  return ''
}

export const getUserRefreshToken = () => {
  if (process.browser) {
    return localStorage.getItem(REFRESH_TOKEN_NAME)
  }
  return ''
}
