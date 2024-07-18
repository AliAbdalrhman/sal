import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api";

function getUserProfile() {
  return axiosInstance.get<never, { data: User }>("/profile");
}

const useProfileQuery = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    refetchOnMount: false,
    select: (data) => data.data,
  });
};

export default useProfileQuery;
