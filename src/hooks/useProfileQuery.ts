import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api";
import useAuthContext from "./useAuthContext";

function getUserProfile() {
  return axiosInstance.get<{ data: User }>("/profile");
}

const useProfileQuery = () => {
  const { isAuth } = useAuthContext();
  return useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    enabled: isAuth,
  });
};

export default useProfileQuery;
