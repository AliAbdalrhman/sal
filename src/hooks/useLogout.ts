import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import useAuthContext from "./useAuthContext";

function logout() {
  return axiosInstance.post<never, LoginResponse>("/logout");
}

const useLogout = () => {
  //   const navigate = useNavigate();
  const { onLogout } = useAuthContext();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      onLogout();
      logout();
    },
  });
};

export default useLogout;
