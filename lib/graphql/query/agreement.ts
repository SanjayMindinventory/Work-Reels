import { gql } from '@apollo/client'

export const GET_FIRST_AGREEMENTS = gql`
  query GetFirstAgreement($type: String!) {
    agreementsList(
      first: 1
      sort: { createdAt: DESC }
      filter: { type: { equals: $type } }
    ) {
      items {
        id
        version
        type
        body
        createdAt
      }
    }
  }
`
