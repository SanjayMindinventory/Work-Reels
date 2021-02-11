import { gql } from '@apollo/client/core'

export const GET_LOCAL_SESSION = gql`
  query getSession {
    me @client {
      id
      email
      firstName
      lastName
      avatar {
        public
        downloadUrl
      }
      roles {
        items {
          name
        }
      }
      orgAdmin {
        id
        name
      }
    }
  }
`
