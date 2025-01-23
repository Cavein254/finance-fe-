import { gql } from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      error
      success
      data {
        id
        name
        image
        email
        createdAt
        updatedAt
      }
    }
  }
`;
