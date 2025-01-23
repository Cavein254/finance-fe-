import { gql } from "graphql-tag";

export const GET_HISTORICAL_DATA = gql`
  query GetHistoricalData($symbol: String!) {
    getHistoricalData(symbol: $symbol) {
      data {
        id
        stockId
        date
        open
        high
        low
        close
        openInt
      }
      error
      success
    }
  }
`;
