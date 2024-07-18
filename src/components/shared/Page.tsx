import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";

interface PageProps extends BoxProps {
  docTitle: string;
  children: ReactNode;
}
function Page({ docTitle, children, ...rest }: PageProps) {
  useEffect(() => {
    document.title = "Sal | " + docTitle;
  }, [docTitle]);
  return (
    <Box as="main" {...rest}>
      {children}
    </Box>
  );
}

export default Page;
