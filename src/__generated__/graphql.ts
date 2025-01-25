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

/** The results of stocks array */
export type GetStockDataResponse = {
  __typename?: 'GetStockDataResponse';
  data?: Maybe<Array<Maybe<StockData>>>;
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser?: Maybe<UserDataResponse>;
  getHistoricalData?: Maybe<GetStockDataResponse>;
  getHistoricalFirstRow?: Maybe<StockSingleRowResults>;
};


export type QueryGetHistoricalDataArgs = {
  symbol: Scalars['String']['input'];
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

export type GetHistoricalDataQueryVariables = Exact<{
  symbol: Scalars['String']['input'];
}>;


export type GetHistoricalDataQuery = { __typename?: 'Query', getHistoricalData?: { __typename?: 'GetStockDataResponse', error?: string | null, success: boolean, data?: Array<{ __typename?: 'StockData', id: string, stockId?: string | null, date?: any | null, open?: number | null, high?: number | null, low?: number | null, close?: number | null, openInt?: number | null } | null> | null } | null };

export type GetHistoricalFirstRowQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHistoricalFirstRowQuery = { __typename?: 'Query', getHistoricalFirstRow?: { __typename?: 'StockSingleRowResults', success: boolean, error?: string | null, data?: Array<{ __typename?: 'StockSingleRow', id: string, name?: string | null, ticker?: string | null, stockData?: Array<{ __typename?: 'StockData', id: string, stockId?: string | null, date?: any | null, open?: number | null, high?: number | null, low?: number | null, close?: number | null, openInt?: number | null } | null> | null } | null> | null } | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'UserDataResponse', error?: string | null, success: boolean, data?: { __typename?: 'User', id: string, name?: string | null, image?: string | null, email?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null };


export const GetHistoricalDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHistoricalData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"symbol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHistoricalData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"symbol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"symbol"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"high"}},{"kind":"Field","name":{"kind":"Name","value":"low"}},{"kind":"Field","name":{"kind":"Name","value":"close"}},{"kind":"Field","name":{"kind":"Name","value":"openInt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<GetHistoricalDataQuery, GetHistoricalDataQueryVariables>;
export const GetHistoricalFirstRowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHistoricalFirstRow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHistoricalFirstRow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stockData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"high"}},{"kind":"Field","name":{"kind":"Name","value":"low"}},{"kind":"Field","name":{"kind":"Name","value":"close"}},{"kind":"Field","name":{"kind":"Name","value":"openInt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<GetHistoricalFirstRowQuery, GetHistoricalFirstRowQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;