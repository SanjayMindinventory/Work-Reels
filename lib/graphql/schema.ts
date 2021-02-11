import { gql } from '@apollo/client/core'

export const schema = gql`
  type Session {
    me: User
  }
  input SessionMeInput {
    id: ID!
    email: String
    firstName: String
    lastName: String
    createdAt: String
    status: String
    origin: String
  }
  input SessionInput {
    me: SessionMeInput
  }
  extend type Query {
    getSession: Session!
    me: User
  }
  extend type Mutation {
    setSession(session: SessionInput!): Boolean
  }
`
