import { gql } from '@apollo/client'

export const TASK_UPDATE_DONE = gql`
  mutation TaskUpdateDone($taskId: ID!) {
    taskUpdate(filter: { id: $taskId }, data: { status: "Done" }) {
      status
    }
  }
`
