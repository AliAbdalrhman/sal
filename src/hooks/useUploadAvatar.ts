import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import { updateProfile } from "./useProfile";

function upload(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  return axiosInstance.post<never, { path: string }>("/upload", formData);
}

const useUploadAvatar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["uploadAvatar"],
    mutationFn: upload,
    onSuccess: (data) => {
      updateProfile({ avatar: data.path }).then(() => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      });
    },
  });
};

export default useUploadAvatar;
