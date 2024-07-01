import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import { setLocalStorageToken } from "../utils/localStorageToken";
import { useNavigate } from "react-router-dom";

function login(loginData: LoginData) {
  return axiosInstance.post("/login", loginData);
}

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      setLocalStorageToken(data.data.token);
      navigate("/");
    },
  });
};

export default useLogin;
