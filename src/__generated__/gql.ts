/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    mutation CreatePortfolio($input: CreatePortfolio) {\n  createPortfolio(input: $input) {\n    success\n    error\n    message\n  }\n}\n    ": types.CreatePortfolioDocument,
    "\n  query GetHistoricalData($symbol: String!) {\n    getHistoricalData(symbol: $symbol) {\n      data {\n        id\n        stockId\n        date\n        open\n        high\n        low\n        close\n        openInt\n      }\n      error\n      success\n    }\n  }\n": types.GetHistoricalDataDocument,
    "\n  query GetHistoricalFirstRow {\n  getHistoricalFirstRow {\n    success\n    data {\n      id\n      name\n      stockData {\n        id\n        stockId\n        date\n        open\n        high\n        low\n        close\n        openInt\n      }\n      ticker\n    }\n    error\n  }\n}\n  ": types.GetHistoricalFirstRowDocument,
    "\n  query GetAllSymbols {\n  getAllSymbols {\n    data {\n      id\n      name\n      ticker\n    }\n    error\n    success\n  }\n}\n  ": types.GetAllSymbolsDocument,
    "\n  query GetCurrentUser {\n    getCurrentUser {\n      error\n      success\n      data {\n        id\n        name\n        image\n        email\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  query GetMyPortfolio {\n  getMyPortfolio {\n    data {\n      id\n      name\n      description\n      totalInvestment\n      stocks {\n        id\n        name\n        ticker\n        quantity\n        purchasePrice\n        currentPrice\n        lastUpdated\n      }\n      createdAt\n      updatedAt\n    }\n    error\n    success\n  }\n}\n  ": types.GetMyPortfolioDocument,
    "\n  mutation CreateStockEntry($input: CreateStockEntry) {\n  createStockEntry(input: $input) {\n    success\n    error\n    message\n  }\n}\n  ": types.CreateStockEntryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreatePortfolio($input: CreatePortfolio) {\n  createPortfolio(input: $input) {\n    success\n    error\n    message\n  }\n}\n    "): (typeof documents)["\n    mutation CreatePortfolio($input: CreatePortfolio) {\n  createPortfolio(input: $input) {\n    success\n    error\n    message\n  }\n}\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHistoricalData($symbol: String!) {\n    getHistoricalData(symbol: $symbol) {\n      data {\n        id\n        stockId\n        date\n        open\n        high\n        low\n        close\n        openInt\n      }\n      error\n      success\n    }\n  }\n"): (typeof documents)["\n  query GetHistoricalData($symbol: String!) {\n    getHistoricalData(symbol: $symbol) {\n      data {\n        id\n        stockId\n        date\n        open\n        high\n        low\n        close\n        openInt\n      }\n      error\n      success\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHistoricalFirstRow {\n  getHistoricalFirstRow {\n    success\n    data {\n      id\n      name\n      stockData {\n        id\n        stockId\n        date\n        open\n        high\n        low\n        close\n        openInt\n      }\n      ticker\n    }\n    error\n  }\n}\n  "): (typeof documents)["\n  query GetHistoricalFirstRow {\n  getHistoricalFirstRow {\n    success\n    data {\n      id\n      name\n      stockData {\n        id\n        stockId\n        date\n        open\n        high\n        low\n        close\n        openInt\n      }\n      ticker\n    }\n    error\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllSymbols {\n  getAllSymbols {\n    data {\n      id\n      name\n      ticker\n    }\n    error\n    success\n  }\n}\n  "): (typeof documents)["\n  query GetAllSymbols {\n  getAllSymbols {\n    data {\n      id\n      name\n      ticker\n    }\n    error\n    success\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrentUser {\n    getCurrentUser {\n      error\n      success\n      data {\n        id\n        name\n        image\n        email\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    getCurrentUser {\n      error\n      success\n      data {\n        id\n        name\n        image\n        email\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMyPortfolio {\n  getMyPortfolio {\n    data {\n      id\n      name\n      description\n      totalInvestment\n      stocks {\n        id\n        name\n        ticker\n        quantity\n        purchasePrice\n        currentPrice\n        lastUpdated\n      }\n      createdAt\n      updatedAt\n    }\n    error\n    success\n  }\n}\n  "): (typeof documents)["\n  query GetMyPortfolio {\n  getMyPortfolio {\n    data {\n      id\n      name\n      description\n      totalInvestment\n      stocks {\n        id\n        name\n        ticker\n        quantity\n        purchasePrice\n        currentPrice\n        lastUpdated\n      }\n      createdAt\n      updatedAt\n    }\n    error\n    success\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateStockEntry($input: CreateStockEntry) {\n  createStockEntry(input: $input) {\n    success\n    error\n    message\n  }\n}\n  "): (typeof documents)["\n  mutation CreateStockEntry($input: CreateStockEntry) {\n  createStockEntry(input: $input) {\n    success\n    error\n    message\n  }\n}\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;