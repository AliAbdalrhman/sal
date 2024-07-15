import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
// import { hasLocalStorageToken } from "../../utils/localStorageToken";

function GuestGaurd({ children }: { children: ReactNode }) {
  const { isAuth } = useAuthContext();
  // const navigate = useNavigate();

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default GuestGaurd;
