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

export const GET_MY_PORTFOLIO = gql(`
  query GetMyPortfolio {
  getMyPortfolio {
    data {
      id
      name
      description
      totalInvestment
      stocks {
        id
        name
        ticker
        quantity
        purchasePrice
        currentPrice
        lastUpdated
      }
      createdAt
      updatedAt
    }
    error
    success
  }
}
  `);

export const CREATE_STOCK_ENTRY = gql(`
  mutation CreateStockEntry($input: CreateStockEntry) {
  createStockEntry(input: $input) {
    success
    error
    message
  }
}
  `);
