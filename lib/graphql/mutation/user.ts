import { gql } from '@apollo/client/core'

/* Login the user with email and password */
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!, $authProfileId: ID!) {
    userLogin(
      data: {
        email: $email
        password: $password
        authProfileId: $authProfileId
      }
    ) {
      auth {
        refreshToken
        idToken
      }
    }
  }
`

/* Sign up the user with email and password */
export const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $email: String!
    $firstName: String!
    $lastName: String
    $password: String!
    $authProfileId: ID!
    $role: String!
    $orgId: ID!
    $agreementID: String!
  ) {
    userSignUpWithPassword(
      user: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        roles: { connect: [{ name: $role }] }
        orgAdmin: { connect: { id: $orgId } }
        agreementID: $agreementID
      }
      password: $password
      authProfileId: $authProfileId
    ) {
      id
      email
      createdAt
    }
  }
`

export const GET_REFRESH_TOKEN = gql`
  mutation UserRefreshToken(
    $email: String
    $refreshToken: String!
    $authProfileId: ID!
  ) {
    userRefreshToken(
      data: {
        email: $email
        refreshToken: $refreshToken
        authProfileId: $authProfileId
      }
    ) {
      refreshToken
      idToken
    }
  }
`
