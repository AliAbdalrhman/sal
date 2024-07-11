import {
  Box,
  Flex,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import authImage from "../assets/images/AuthImage.png";
import logoImage from "../assets/images/Logo.png";
import LoginForm from "../components/forms/LoginForm";
import RegisterFrom from "../components/forms/RegisterFrom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

enum AuthForms {
  LOGIN,
  REGISTER,
}

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams("0");
  const tabQueryParams = searchParams.get("tab");
  const tabNumber = tabQueryParams ? Number(tabQueryParams) : AuthForms.LOGIN;

  const [tabIndex, setTabIndex] = useState<AuthForms>(tabNumber);

  const handleTabsChange = (index: AuthForms) => {
    setTabIndex(index);
    setSearchParams({ tab: index.toString() });
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      minW="100vh"
      bg="#F5F5F5"
    >
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        maxW="3xl"
        border="1px solid green"
      >
        <Box bg="#EBFBFF" textAlign="center">
          <Image src={logoImage} maxW="120px" display="inline-block" />
          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="solid-rounded-two-tabs"
            colorScheme="green"
          >
            <TabList>
              <Tab>Sign in</Tab>
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>

              <TabPanel>
                <RegisterFrom />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Flex justifyContent="center" alignItems="flex-end">
          <Image src={authImage} maxW="400px" />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Auth;
