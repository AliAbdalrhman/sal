import { useToast } from "@chakra-ui/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ReactNode } from "react";
import useAuthContext from "../../hooks/useAuthContext";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<{ message: string }>;
  }
}

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();

  const { onLogout } = useAuthContext();
  const queryCache = new QueryCache({
    onError: (error) => {
      let msg: string;
      if (error.response?.status === 401) {
        onLogout();
        msg = "Session is expired, please login again";
      } else {
        msg = error.response?.data.message || "Something went wrong";
      }
      toast({
        title: "Something went wrong",
        description: msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const mutationCache = new MutationCache({
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.response?.data.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });
  const queryClient = new QueryClient({ queryCache, mutationCache });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
