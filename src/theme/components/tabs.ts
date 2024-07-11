import { ComponentStyleConfig } from "@chakra-ui/react";

const tabs: ComponentStyleConfig = {
  variants: {
    "solid-rounded-two-tabs": (props) => ({
      ...props.theme.components.Tabs.variants?.["solid-rounded"](props),
      tab: {
        ...props.theme.components.Tabs.variants?.["solid-rounded"](props).tab,
        px: 4,
        boxShadow: "md",
        fontWeight: "normal",
        bg: "white",
        color: "primary.500",
        ":first-child": {
          me: "-40px",
          pe: "45px",
        },
        ":nth-child(2)": {
          ps: "45px",
        },
        _selected: {
          bg: "primary.500",
          color: "white",
          zIndex: 2,
          ":first-child": {
            pe: "4",
          },
          ":nth-child(2)": {
            ps: "4",
          },
        },
      },
    }),
  },
  sizes: {},
};

export default tabs;
