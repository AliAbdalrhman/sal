import { Navigate, Outlet } from "react-router-dom";
import { hasLocalStorageToken } from "../../utils/localStorageToken";

function AuthGaurd() {
  //   const navigate = useNavigate();
  const isLogged = hasLocalStorageToken();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthGaurd;
