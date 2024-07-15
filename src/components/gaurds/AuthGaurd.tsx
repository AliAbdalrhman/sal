import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { ReactNode } from "react";
// import { hasLocalStorageToken } from "../../utils/localStorageToken";

function AuthGaurd({ children }: { children: ReactNode }) {
  const { isAuth } = useAuthContext();
  // const navigate = useNavigate();

  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}

export default AuthGaurd;
