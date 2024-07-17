import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";

function login(loginData: LoginData) {
  return axiosInstance.post<never, LoginResponse>("/login", loginData);
}

const useLogin = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      onLogin(data.token);
      navigate("/");
    },
  });
};

export default useLogin;
