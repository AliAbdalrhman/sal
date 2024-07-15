import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";

function useAuthContext() {
  const authContext = useContext(AuthContext);

  return authContext;
}

export default useAuthContext;
