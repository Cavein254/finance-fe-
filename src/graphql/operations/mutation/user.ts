import { gql } from "@apollo/client";

export const CREATE_PORTFOLIO = gql(`
    mutation CreatePortfolio($input: CreatePortfolio) {
  createPortfolio(input: $input) {
    success
    error
    message
  }
}
    `);
