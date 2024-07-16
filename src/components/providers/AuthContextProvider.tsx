import { ReactNode, useEffect, useState } from "react";
import axiosInstance from "../../api";
import {
  getLocalStorageToken,
  removeLocalStorageToken,
  setLocalStorageToken,
} from "../../utils/localStorageToken";
import AuthContext from "../context/AuthContext";

function setAxiosToken(token?: string) {
  axiosInstance.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : null;
}
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const isAuth = !!token;

  useEffect(() => {
    const localStorageToken = getLocalStorageToken();
    if (localStorageToken) {
      setToken(localStorageToken);
      setAxiosToken(localStorageToken);
    }
    setIsInitialized(true);
  }, []);

  function onLogin(tokenData: string) {
    setToken(tokenData);
    setAxiosToken(tokenData);
    setLocalStorageToken(tokenData);
  }
  function onLogout() {
    setToken(null);
    setAxiosToken(undefined);
    removeLocalStorageToken();
  }
  return (
    <AuthContext.Provider value={{ isAuth, onLogin, onLogout }}>
      {isInitialized && children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
