import { gql } from '@apollo/client'

export const GET_MEDIAS = gql`
  query GetMedias($orgId: ID) {
    mediaList(
      orderBy: createdAt_DESC
      filter: { orgs: { every: { id: { equals: $orgId } } } }
    ) {
      items {
        id
        createdAt
        updatedAt
        url
        fileName
        size
        mimeType
        status
        isProcessing
        thumbnailUrl
        owner {
          id
          firstName
          lastName
          email
        }
        tags {
          items {
            name
          }
        }
        orgs {
          count
        }
      }
    }
  }
`
