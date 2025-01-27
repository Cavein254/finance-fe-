/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

/** Input for creating a new Portfolio */
export type CreatePortfolio = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  totalInvestment?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['String']['input'];
};

/** Response after creating a portfolio */
export type CreateResponse = {
  __typename?: 'CreateResponse';
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Input for creating a new Stock Entry */
export type CreateStockEntry = {
  currentPrice: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  portfolioId: Scalars['String']['input'];
  purchaseDate?: InputMaybe<Scalars['String']['input']>;
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  ticker: Scalars['String']['input'];
  totalValue: Scalars['Float']['input'];
};

/** Return for user portfolios */
export type GetPortfolioResults = {
  __typename?: 'GetPortfolioResults';
  data?: Maybe<Array<Maybe<Portfolio>>>;
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** The results of stocks array */
export type GetStockDataResponse = {
  __typename?: 'GetStockDataResponse';
  data?: Maybe<Array<Maybe<StockData>>>;
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPortfolio?: Maybe<CreateResponse>;
  createStockEntry?: Maybe<CreateResponse>;
};


export type MutationCreatePortfolioArgs = {
  input?: InputMaybe<CreatePortfolio>;
};


export type MutationCreateStockEntryArgs = {
  input?: InputMaybe<CreateStockEntry>;
};

/** A Portfolio object */
export type Portfolio = {
  __typename?: 'Portfolio';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  stocks?: Maybe<Array<Maybe<Stock>>>;
  totalInvestment?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  getAllSymbols?: Maybe<StockSymbolsResults>;
  getCurrentUser?: Maybe<UserDataResponse>;
  getHistoricalData?: Maybe<GetStockDataResponse>;
  getHistoricalFirstRow?: Maybe<StockSingleRowResults>;
  getMyPortfolio?: Maybe<GetPortfolioResults>;
};


export type QueryGetHistoricalDataArgs = {
  symbol: Scalars['String']['input'];
};

/** A stock object */
export type Stock = {
  __typename?: 'Stock';
  currentPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  lastUpdated?: Maybe<Scalars['Date']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  ticker?: Maybe<Scalars['String']['output']>;
};

/** This is the structure of a stock */
export type StockData = {
  __typename?: 'StockData';
  close?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  openInt?: Maybe<Scalars['Int']['output']>;
  stockId?: Maybe<Scalars['String']['output']>;
};

/** Results of a user object */
export type StockSingleRow = {
  __typename?: 'StockSingleRow';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  stockData?: Maybe<Array<Maybe<StockData>>>;
  ticker?: Maybe<Scalars['String']['output']>;
};

/** Results of a all stock symbols with the most recent stock entry */
export type StockSingleRowResults = {
  __typename?: 'StockSingleRowResults';
  data?: Maybe<Array<Maybe<StockSingleRow>>>;
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** Returns all stock ticker in the db */
export type StockSymbolsResults = {
  __typename?: 'StockSymbolsResults';
  data?: Maybe<Array<Maybe<StockTicker>>>;
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** A stock ticker object */
export type StockTicker = {
  __typename?: 'StockTicker';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  ticker?: Maybe<Scalars['String']['output']>;
};

/** A user type object */
export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

/** Results of a user object */
export type UserDataResponse = {
  __typename?: 'UserDataResponse';
  data?: Maybe<User>;
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreatePortfolioMutationVariables = Exact<{
  input?: InputMaybe<CreatePortfolio>;
}>;


export type CreatePortfolioMutation = { __typename?: 'Mutation', createPortfolio?: { __typename?: 'CreateResponse', success?: boolean | null, error?: string | null, message?: string | null } | null };

export type GetHistoricalDataQueryVariables = Exact<{
  symbol: Scalars['String']['input'];
}>;


export type GetHistoricalDataQuery = { __typename?: 'Query', getHistoricalData?: { __typename?: 'GetStockDataResponse', error?: string | null, success: boolean, data?: Array<{ __typename?: 'StockData', id: string, stockId?: string | null, date?: any | null, open?: number | null, high?: number | null, low?: number | null, close?: number | null, openInt?: number | null } | null> | null } | null };

export type GetHistoricalFirstRowQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHistoricalFirstRowQuery = { __typename?: 'Query', getHistoricalFirstRow?: { __typename?: 'StockSingleRowResults', success: boolean, error?: string | null, data?: Array<{ __typename?: 'StockSingleRow', id: string, name?: string | null, ticker?: string | null, stockData?: Array<{ __typename?: 'StockData', id: string, stockId?: string | null, date?: any | null, open?: number | null, high?: number | null, low?: number | null, close?: number | null, openInt?: number | null } | null> | null } | null> | null } | null };

export type GetAllSymbolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSymbolsQuery = { __typename?: 'Query', getAllSymbols?: { __typename?: 'StockSymbolsResults', error?: string | null, success: boolean, data?: Array<{ __typename?: 'StockTicker', id: string, name?: string | null, ticker?: string | null } | null> | null } | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'UserDataResponse', error?: string | null, success: boolean, data?: { __typename?: 'User', id: string, name?: string | null, image?: string | null, email?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export type GetMyPortfolioQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPortfolioQuery = { __typename?: 'Query', getMyPortfolio?: { __typename?: 'GetPortfolioResults', error?: string | null, success: boolean, data?: Array<{ __typename?: 'Portfolio', id: string, name?: string | null, description?: string | null, totalInvestment?: number | null, createdAt?: any | null, updatedAt?: any | null, stocks?: Array<{ __typename?: 'Stock', id: string, name?: string | null, ticker?: string | null, quantity?: number | null, purchasePrice?: number | null, currentPrice?: number | null, lastUpdated?: any | null } | null> | null } | null> | null } | null };

export type CreateStockEntryMutationVariables = Exact<{
  input?: InputMaybe<CreateStockEntry>;
}>;


export type CreateStockEntryMutation = { __typename?: 'Mutation', createStockEntry?: { __typename?: 'CreateResponse', success?: boolean | null, error?: string | null, message?: string | null } | null };


export const CreatePortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePortfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePortfolio"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreatePortfolioMutation, CreatePortfolioMutationVariables>;
export const GetHistoricalDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHistoricalData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"symbol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHistoricalData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"symbol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"symbol"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"high"}},{"kind":"Field","name":{"kind":"Name","value":"low"}},{"kind":"Field","name":{"kind":"Name","value":"close"}},{"kind":"Field","name":{"kind":"Name","value":"openInt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<GetHistoricalDataQuery, GetHistoricalDataQueryVariables>;
export const GetHistoricalFirstRowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHistoricalFirstRow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHistoricalFirstRow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stockData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"high"}},{"kind":"Field","name":{"kind":"Name","value":"low"}},{"kind":"Field","name":{"kind":"Name","value":"close"}},{"kind":"Field","name":{"kind":"Name","value":"openInt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<GetHistoricalFirstRowQuery, GetHistoricalFirstRowQueryVariables>;
export const GetAllSymbolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSymbols"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllSymbols"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<GetAllSymbolsQuery, GetAllSymbolsQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetMyPortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyPortfolio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyPortfolio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"totalInvestment"}},{"kind":"Field","name":{"kind":"Name","value":"stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"currentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<GetMyPortfolioQuery, GetMyPortfolioQueryVariables>;
export const CreateStockEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStockEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStockEntry"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStockEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateStockEntryMutation, CreateStockEntryMutationVariables>;