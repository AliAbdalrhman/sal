import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import Button from "./components/button";
import Input from "./components/input";
import Tabs from "./components/tabs";

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Input,
    Tabs,
  },
});

export default theme;
