import { useToast } from "@chakra-ui/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ReactNode, useMemo } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<{ message: string }>;
  }
}

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();

  const { onLogout } = useAuthContext();

  const queryClient = useMemo(() => {
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

    const queryClient = new QueryClient({
      queryCache,
      mutationCache,
      defaultOptions: {
        queries: { retry: false, refetchOnWindowFocus: false },
      },
    });

    return queryClient;
  }, [toast, onLogout]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
