import { gql } from '@apollo/client'

export const GET_ORG_MEDIAS = gql`
  query GetOrgMedias($filter: OrgMediaFilter) {
    orgMediasList(filter: $filter, orderBy: createdAt_DESC) {
      items {
        status
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
`
