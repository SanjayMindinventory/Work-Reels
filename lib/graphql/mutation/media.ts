import { gql } from '@apollo/client'

export const USER_UPLOAD_MEDIA = gql`
  mutation UserUploadMedia(
    $fileName: String!
    $url: String!
    $ownerId: ID!
    $size: Int
    $mimeType: String!
    $workflowJobId: String
    $isProcessing: Int
    $orgId: ID!
  ) {
    mediaCreate(
      data: {
        fileName: $fileName
        url: $url
        size: $size
        mimeType: $mimeType
        workflowJobId: $workflowJobId
        owner: { connect: { id: $ownerId } }
        originalMediaUrl: $url
        isProcessing: $isProcessing
        orgs: { connect: { id: $orgId } }
      }
    ) {
      id
      fileName
      owner {
        id
      }
    }
  }
`

export const UPDATE_ORG_MEDIA_STATUS = gql`
  mutation UpdateOrgMediaStatus($id: ID!, $status: String!) {
    orgMediaUpdateByFilter(
      filter: { media: { id: { equals: $id } } }
      data: { status: { set: $status } }
    ) {
      items {
        id
        type
        status
      }
    }
  }
`
