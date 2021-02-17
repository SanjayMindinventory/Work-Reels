import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  HttpLink,
  from,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from '@apollo/client/cache'
import withApollo from 'next-with-apollo'
import NextApp from 'next/app'
import { GraphQLError } from 'graphql'
import { onError, ErrorResponse } from '@apollo/client/link/error'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ChakraProvider } from '@chakra-ui/react'
import { REFRESH_TOKEN_NAME, TOKEN_NAME } from 'lib/constants'
import { schema } from 'lib/graphql/schema'
import { GET_LOCAL_SESSION } from 'lib/graphql/query/local'
import '../css/tailwind.scss'
import '../css/tabs.scss'
import '../css/video-player.scss'

interface Props {
  apollo: ApolloClient<unknown>
}

class App extends NextApp<Props> {
  state = {
    deferredPrompt: null,
  }
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope,
            )
          },
          function (err) {
            console.log('Service Worker registration failed: ', err)
          },
        )
      })
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log("'beforeinstallprompt' event was fired.")
        this.setState({
          deferredPrompt: e,
        })
      })
    }
  }
  render(): JSX.Element {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <ChakraProvider>
          <Component
            {...pageProps}
            deferredPrompt={this.state.deferredPrompt}
          />
        </ChakraProvider>
      </ApolloProvider>
    )
  }
}

interface GraphQLErrorExtend extends GraphQLError {
  statusCode?: number
  code?: string
}

interface ExtendError extends ErrorResponse {
  graphQLErrors?: readonly GraphQLErrorExtend[]
}

const errorLink = onError(({ graphQLErrors }: ExtendError) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, statusCode, code }) => {
      console.log('message: ', message)
      if (statusCode === 401 && process.browser) {
        localStorage.removeItem(TOKEN_NAME)
      }
      if (code === 'TokenExpiredError' && process.browser) {
        localStorage.removeItem(TOKEN_NAME)
        localStorage.removeItem(REFRESH_TOKEN_NAME)
      }
    })
  }
  // if (networkError) {
  //   console.log('Network error: ', networkError)

  //   if ((networkError).statusCode === 401) {
  //     // signOut(client)
  //   }
  // }
})

const authLink = new ApolloLink((operation, forward) => {
  if (typeof window === 'undefined') {
    return forward(operation)
  }

  const token = localStorage.getItem(TOKEN_NAME)

  if (token) {
    const authorization = `Bearer ${token}`

    operation.setContext({
      headers: { authorization },
    })
  }

  return forward(operation)
})

const httpLink = new HttpLink({
  uri: 'https://api.8base.com/ckhf9eg6q002207jq3r4b9fnt',
  fetch,
})

let graphqlLink: ApolloLink = httpLink

if (process.browser) {
  const wsLink = new SubscriptionClient(
    'wss://ready-panda-91.hasura.app/v1/graphql',
    {
      lazy: true,
      reconnect: true,
    },
  )
  graphqlLink = split(
    ({ query }) => {
      const def = getMainDefinition(query)
      return (
        def.kind === 'OperationDefinition' && def.operation === 'subscription'
      )
    },
    new WebSocketLink(wsLink),
    httpLink,
  )
}

const link = from([errorLink, authLink, graphqlLink])

export default withApollo(
  ({ initialState }) => {
    const defaultDataCache = {
      session: {
        me: null,
        __typename: 'Session',
      },
    }
    const cache = new InMemoryCache().restore(
      (typeof window !== 'undefined' && (window as any).__APOLLO_STATE__) ||
        initialState ||
        defaultDataCache,
    )
    const client = new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link,
      credentials: 'include',
      resolvers: {
        Mutation: {
          setSession: (_: any, variables: any, { cache }: { cache: any }) => {
            const { session } = variables
            const data = {
              me: session.me,
            }
            cache.writeQuery({
              query: GET_LOCAL_SESSION,
              data,
            })

            return null
          },
        },
      },
      defaultOptions: {
        query: {
          errorPolicy: 'all',
        },
      },
      typeDefs: schema,
      cache,
    })

    return client
  },
  {
    /* eslint-disable react/display-name */
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  },
)(App)
