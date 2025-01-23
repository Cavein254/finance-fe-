import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client.ts";
import { UserProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserProvider>
    </ApolloProvider>
  </StrictMode>
);
