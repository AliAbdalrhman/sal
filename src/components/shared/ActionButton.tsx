import { Box, Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ActionButtonProps {
  Icon: ReactElement;
  count: string;
  isFilled: boolean;
}
const ActionButton = ({ Icon, count, isFilled }: ActionButtonProps) => {
  return (
    <Button
      display="flex"
      alignItems="center"
      fontSize="2xl"
      color={isFilled ? "primary.500" : "transparent"}
      leftIcon={Icon}
    >
      <Box color="primary.500" as="span" fontSize="sm" fontWeight="400">
        {count}
      </Box>
    </Button>
  );
};
export default ActionButton;
