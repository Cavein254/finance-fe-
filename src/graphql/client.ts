import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const VITE_GRAPHQL_URL: string = import.meta.env.VITE_GRAPHQL_SERVER as string;
const VITE_WS_LINK: string = import.meta.env.VITE_WS_SERVER as string;

const httpLink = new HttpLink({
  uri: VITE_GRAPHQL_URL,
  credentials: "include",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: VITE_WS_LINK,
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
