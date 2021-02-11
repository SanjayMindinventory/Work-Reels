import { gql } from '@apollo/client'

export const GET_TASK_DETAIL = gql`
  query GetTaskDetail($task_id: ID!) {
    task(id: $task_id) {
      id
      createdAt
      status
      project {
        name
      }
      template {
        quantity
        requirement
        taskTemplate {
          name
          description
          exampleURL
          pointers {
            items {
              id
              title
              category
              type
              description
            }
          }
        }
      }
      media {
        count
        items {
          id
          type
          status
          media {
            id
            fileName
            url
          }
        }
      }
    }
  }
`
