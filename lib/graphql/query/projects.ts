import { gql } from '@apollo/client/core'

export const GET_PROJECTS = gql`
  query GetProjects($filter: ProjectFilter) {
    projectsList(filter: $filter) {
      items {
        id
        name
        tasks {
          count
          items {
            status
          }
        }
        filmingDueDate
        createdBy {
          firstName
          lastName
        }
        template {
          name
          type
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

export const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($projectId: ID!) {
    project(id: $projectId) {
      id
      name
      filmingDueDate
      template {
        id
        name
        type
        deliverables {
          count
          items {
            id
            name
            quantity
          }
        }
        taskTab: linkedTaskTemplates {
          items {
            id
            quantity
            requirement
            taskTemplate {
              id
              name
              type
              description
            }
            completedTasks: tasks(
              filter: {
                AND: {
                  status: { equals: "done" }
                  project: { id: { equals: $projectId } }
                }
              }
            ) {
              count
              items {
                media {
                  items {
                    media {
                      mimeType
                      size
                      status
                      thumbnailUrl
                      url
                      fileName
                      id
                      owner {
                        firstName
                        lastName
                        id
                      }
                    }
                  }
                }
              }
            }
            totalTasks: tasks(
              filter: { project: { id: { equals: $projectId } } }
            ) {
              count
            }
            tasks(filter: { project: { id: { equals: $projectId } } }) {
              items {
                id
                status
                media {
                  items {
                    id
                    createdAt
                    tags {
                      items {
                        id
                        name
                        type
                      }
                    }
                    status
                    type
                    parentTask {
                      id
                      project {
                        id
                        name
                      }
                      template {
                        projectTemplate {
                          id
                          name
                        }
                        taskTemplate {
                          id
                          name
                        }
                        requirement
                      }
                    }
                    media {
                      id
                      fileName
                      url
                      fileName
                      size
                      mimeType
                      status
                      isProcessing
                      thumbnailUrl
                      tags {
                        items {
                          name
                        }
                      }
                      owner {
                        id
                        firstName
                        lastName
                        email
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      peopleTab: assignedWorkers {
        items {
          id
          tags {
            items {
              id
              name
              type
            }
          }
          user {
            id
            firstName
            lastName
            media {
              count
            }
            user_project {
              count
            }
          }
        }
      }
      mediaTab: media(sort: { createdAt: DESC }) {
        items {
          id
          tags {
            items {
              id
              name
              type
            }
          }
          status
          type
          parentTask {
            id
            project {
              id
              name
            }
            template {
              projectTemplate {
                id
                name
              }
              taskTemplate {
                id
                name
              }
              requirement
            }
          }
          media {
            id
            fileName
            url
            fileName
            size
            mimeType
            status
            isProcessing
            thumbnailUrl
            tags {
              items {
                name
              }
            }
            owner {
              id
              firstName
              lastName
              email
            }
          }
        }
      }
    }
  }
`

export const GET_PROJECT_TEMPLATE_LIST = gql`
  query GetProjectTemPlateList {
    projectTemplatesList(
      orderBy: createdAt_DESC
      filter: { OR: [{ name: { equals: "Working at Truetimber" } }] }
    ) {
      items {
        id
        name
        deliverables {
          items {
            id
            name
            quantity
          }
          count
        }
        linkedTaskTemplates {
          items {
            id
            requirement
            taskTemplate {
              name
            }
            quantity
          }
          count
        }
        tags {
          items {
            id
            name
          }
        }
        description
        tips
        uses
      }
    }
  }
`

export const GET_PROJECT_TEMPLATE_POINTERS = gql`
  query GetProjectTemplatePointers($templateId: ID!) {
    taskTemplate(id: $templateId) {
      name
      description
      exampleURL
      tags {
        items {
          pointers {
            items {
              _description
              category
              type
              title
              id
            }
          }
        }
      }
    }
  }
`
