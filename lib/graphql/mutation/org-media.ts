import { gql } from '@apollo/client'

export const USER_CREATE_MEDIA_ORG = gql`
  mutation UserCreateMediaOrg(
    $mediaInput: OrgMediaMediaRelationInput!
    $orgId: ID!
    $taskId: ID!
  ) {
    orgMediaCreate(
      data: {
        org: { connect: { id: $orgId } }
        media: $mediaInput
        parentTask: { connect: { id: $taskId } }
      }
    ) {
      id
      type
    }
  }
`

export const USER_UPLOAD_MEDIA_OF_ORG = gql`
  mutation UserUploadMediaOfOrg(
    $fileName: String!
    $url: String!
    $ownerId: ID!
    $size: Int
    $mimeType: String!
    $workflowJobId: String
    $isProcessing: Int
    $orgId: ID!
  ) {
    orgMediaCreate(
      data: {
        media: {
          create: {
            fileName: $fileName
            url: $url
            size: $size
            mimeType: $mimeType
            workflowJobId: $workflowJobId
            owner: { connect: { id: $ownerId } }
            originalMediaUrl: $url
            isProcessing: $isProcessing
          }
        }
        org: { connect: { id: $orgId } }
      }
    ) {
      id
      media {
        id
        fileName
        url
      }
    }
  }
`
