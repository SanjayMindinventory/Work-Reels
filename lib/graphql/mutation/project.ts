import { gql } from '@apollo/client'

export const PROJECT_CREATE = gql`
  mutation CreateProject(
    $templateId: ID!
    $workerId: [WorkerKeyFilter!]
    $orgId: ID!
    $name: String
  ) {
    projectCreate(
      data: {
        name: $name
        template: { connect: { id: $templateId } }
        assignedWorkers: { connect: $workerId }
        org: { connect: { id: $orgId } }
      }
    ) {
      id
      name
      assignedWorkers {
        items {
          user {
            firstName
            lastName
          }
        }
      }
      template {
        id
        linkedTaskTemplates {
          items {
            id
            quantity
            requirement
            taskTemplate {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const CREATE_PROJECT_TASK = gql`
  mutation CreateProjectTask($tasks: [TaskCreateManyInput]!) {
    taskCreateMany(data: $tasks) {
      items {
        id
        status
        project {
          id
          name
        }
        template {
          taskTemplate {
            name
          }
        }
      }
    }
  }
`
