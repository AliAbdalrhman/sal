import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import { useToast } from "@chakra-ui/react";

export function updateProfile(profileData: Partial<User>) {
  return axiosInstance.patch<never, { data: User }>("/profile", profileData);
}

const useProfile = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationKey: ["profile"],
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast({
        title: "Profile updated",
        description: "Your profile successfully updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      if (onSuccess) {
        onSuccess();
      }
    },
  });
};

export default useProfile;
