import { Button } from "@chakra-ui/react";
import useLogout from "../hooks/useLogout";
import useProfileQuery from "../hooks/useProfileQuery";

function HomePage() {
  useProfileQuery();
  const { mutate: logout } = useLogout();
  return (
    <>
      <div>HomePage</div>
      <Button colorScheme="red" onClick={() => logout()}>
        Logout
      </Button>
    </>
  );
}

export default HomePage;
