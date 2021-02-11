import { gql } from '@apollo/client/core'

export const GET_USER_INFO = gql`
  query GetCurrentUser {
    user {
      id
      email
      firstName
      lastName
      createdAt
      status
      origin
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

export const GET_WORKER_INFO = gql`
  query GetWorkerInfo($userId: ID!) {
    user(id: $userId) {
      firstName
      lastName
      status
      media {
        items {
          url
          fileName
        }
        count
      }
      user_project {
        items {
          name
        }
        count
      }
      worker {
        items {
          tags {
            items {
              name
            }
          }
        }
      }
    }
  }
`
