import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api";

function getUserProfile() {
  return axiosInstance.get<{ data: User }>("/profile");
}

const useProfileQuery = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
};

export default useProfileQuery;
