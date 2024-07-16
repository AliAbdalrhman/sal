import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.ts";
import AuthContextProvider from "./components/providers/AuthContextProvider.tsx";
import QueryProvider from "./components/providers/QueryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
