import { createContext } from "react";

const AuthContext = createContext({
  isAuth: false,
  onLogin: (token: string) => {},
  onLogout: () => {},
});

export default AuthContext;
