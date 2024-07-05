import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import Button from "./components/button";
import Input from "./components/input";

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Input,
  },
});

export default theme;
