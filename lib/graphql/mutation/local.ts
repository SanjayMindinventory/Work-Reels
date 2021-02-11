import gql from 'graphql-tag'

export const SET_LOCAL_SESSION = gql`
  mutation SetLocalSession($session: SessionInput!) {
    setSession(session: $session) @client
  }
`
