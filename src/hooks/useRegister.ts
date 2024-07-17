import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

function register(loginData: RegisterData) {
  return axiosInstance.post<never, LoginResponse>("/register", loginData);
}

const useRegister = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuthContext();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: (data) => {
      onLogin(data.token);
      navigate("/");
    },
  });
};

export default useRegister;
