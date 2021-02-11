import { gql } from '@apollo/client/core'

export const GET_WORKERS = gql`
  query GetWorkers($orgId: ID!) {
    workersList(filter: { org: { id: { equals: $orgId } } }) {
      items {
        id
        user {
          lastName
          firstName
          id
          media {
            count
          }
          user_project {
            count
          }
          status
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
    }
  }
`
