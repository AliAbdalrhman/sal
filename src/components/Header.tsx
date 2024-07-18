import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useMediaQuery,
} from "@chakra-ui/react";
import LogoImage from "../assets/images/Logo.png";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { HomeIcon } from "./icons/HomeIcon";
import { Notification } from "./icons/NotificationIcon";
import { InfoIcon } from "./icons/InfoIcon";
import { useState } from "react";
import useLogout from "../hooks/useLogout";
import useProfileQuery from "../hooks/useProfileQuery";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Box as="header" bg="primary.500">
      <Container
        maxW="container.xl"
        minH="90"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack spacing="4">
          <Image src={LogoImage} w="20" filter="invert(100%)" />
          <Text
            display={{ base: "none", md: "block" }}
            color="white"
            fontSize="xl"
            fontWeight="300"
          >
            any question
          </Text>
        </HStack>
        <SearchForm showSearch={showSearch} setShowSearch={setShowSearch} />
        {!showSearch && <NavList />}
      </Container>
    </Box>
  );
}

const placeholderColor = "#536471";

function SearchForm({ showSearch, setShowSearch }: SearchFormProps) {
  const [isMd] = useMediaQuery("(min-width: 48em)");
  const isSmallScreen = !isMd;
  return (
    <>
      {isSmallScreen && (
        <IconButton
          flexGrow="1"
          justifyContent="flex-end"
          minW="auto"
          me={4}
          w="24px"
          fontSize="2xl"
          aria-label="Search Icon"
          icon={showSearch ? <ArrowForwardIcon /> : <SearchIcon />}
          onClick={() => setShowSearch(!showSearch)}
        />
      )}
      <Box
        as="form"
        flexGrow="1"
        maxW="500px"
        display={{ base: showSearch ? "block" : "none", md: "block" }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" left="15px">
            <SearchIcon color={placeholderColor} />
          </InputLeftElement>
          <Input
            pl="12"
            bg="rgba(255,255,255,0.8)"
            placeholder="Search"
            _placeholder={{ color: placeholderColor }}
          />
        </InputGroup>
      </Box>
    </>
  );
}
function NavList() {
  return (
    <HStack spacing="4">
      <Button minW="auto" variant="link" as={RouterLink} to="/">
        <HomeIcon color="white" fontSize="2xl" />
      </Button>
      <IconButton
        minW="auto"
        variant="link"
        colorScheme="teal"
        aria-label="Notification Icon"
        fontSize="2xl"
        icon={<Notification color="white" />}
      />
      <IconButton
        minW="auto"
        variant="link"
        colorScheme="teal"
        aria-label="Notification Icon"
        fontSize="2xl"
        icon={<InfoIcon color="white" />}
      />
      <ProfileMenu />
    </HStack>
  );
}

const ProfileMenu = () => {
  const { data: profileData } = useProfileQuery();
  const { mutate: logout } = useLogout();
  return (
    <Menu>
      <MenuButton as={Button} variant="link">
        <Avatar
          name={profileData?.full_name}
          src={profileData?.avatar}
          size="md"
        />
      </MenuButton>
      <MenuList>
        <MenuItem as={RouterLink} to="/profile">
          Show Profile
        </MenuItem>
        <MenuDivider />
        <MenuItem color="red.500" onClick={() => logout()}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Header;
