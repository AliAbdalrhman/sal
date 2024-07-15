import {
  Box,
  Center,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import authImage from "../assets/images/AuthImage.png";
import logoImage from "../assets/images/Logo.png";
import LoginForm from "../components/forms/LoginForm";
import RegisterFrom from "../components/forms/RegisterForm";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

enum AuthForms {
  LOGIN,
  REGISTER,
}

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams("0");
  const tabQueryParams = searchParams.get("tab");
  const tabNumber = tabQueryParams ? Number(tabQueryParams) : AuthForms.LOGIN;

  const [tabIndex, setTabIndex] = useState<AuthForms>(tabNumber);

  const handleTabsChange = (index: AuthForms) => {
    setTabIndex(index);
    setSearchParams({ tab: index.toString() });
  };

  return (
    <Center minH="100vh" w="min(90%, 1200px)" mx="auto">
      <HStack
        borderRadius={{ base: "0", md: "lg" }}
        flexGrow="1"
        spacing="0"
        alignItems="stretch"
      >
        <Box
          bg="#EBFBFF"
          px="4"
          textAlign="center"
          flexGrow="1"
          py="10"
          borderTopLeftRadius={{ base: "0", md: "8xl" }}
          borderBottomLeftRadius={{ base: "0", md: "8xl" }}
        >
          <Image src={logoImage} maxW="120px" display="inline-block" />
          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="solid-rounded-two-tabs"
            colorScheme="primary"
            as={VStack}
            maxW="sm"
            mx="auto"
          >
            <TabList justifyContent="center" p="8">
              <Tab>Sign in</Tab>
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanels sx={{ "> div": { p: 0 } }}>
              <TabPanel>
                <LoginForm />
              </TabPanel>

              <TabPanel>
                <RegisterFrom />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box
          bg="white"
          w="45%"
          justifyContent="center"
          alignItems="flex-end"
          borderRadius="8xl"
          ms="-50px"
          display={{ base: "none", md: "flex" }}
        >
          <Image src={authImage} borderRadius="8xl" />
        </Box>
      </HStack>
    </Center>
  );
};

export default AuthPage;
