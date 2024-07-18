import { ComponentStyleConfig } from "@chakra-ui/react";

const input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      rounded: "full",
      fontSize: "2xl",
      px: 6,
      boxShadow: "0 2px 2px 0 rgba(0 , 0 , 0 , 0.20)",
    },
  },
  variants: {
    outline: {
      field: {
        bg: "white",
        border: "1px solid white",
        "::placeholder": { color: "#939598" },
      },
    },
  },
};

export default input;
