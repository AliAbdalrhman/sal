import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useProfileQuery from "../../hooks/useProfileQuery";
import useProfile from "../../hooks/useProfile";

const schema = yup.object({
  username: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email(),
  bio: yup.string(),
  phone: yup.string(),
  job: yup.string(),
});

type InfoType = yup.InferType<typeof schema>;

interface UserInfoFormProps {
  onClose: () => void;
}
function UserInfoForm({ onClose }: UserInfoFormProps) {
  const { data: profileData } = useProfileQuery();
  const { mutate: updateProfile, isPending } = useProfile(onClose);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InfoType>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: profileData?.username || "",
      first_name: profileData?.first_name || "",
      last_name: profileData?.last_name || "",
      email: profileData?.email || "",
      bio: profileData?.bio || "",
      phone: profileData?.phone || "",
      job: profileData?.job || "",
    },
  });

  const onSubmit = (data: InfoType) => {
    updateProfile(data);
  };

  return (
    <SimpleGrid
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      columns={2}
      spacing="4"
      sx={{
        input: { borderRadius: "lg" },
        label: { color: "gray.500" },
        fontWeight: "normal",
      }}
    >
      <FormControl isInvalid={!!errors.username}>
        <FormLabel>Username</FormLabel>
        <Input
          isDisabled={true}
          {...register("username")}
          placeholder="Username"
        />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.first_name}>
        <FormLabel>First Name</FormLabel>
        <Input {...register("first_name")} placeholder="First Name" />
        <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.last_name}>
        <FormLabel>Last Name</FormLabel>
        <Input {...register("last_name")} placeholder="Last Name" />
        <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register("email")} placeholder="Email" />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.phone}>
        <FormLabel>Phone</FormLabel>
        <Input type="phone" {...register("phone")} placeholder="Phone" />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.job}>
        <FormLabel>Job</FormLabel>
        <Input type="job" {...register("job")} placeholder="Job" />
        <FormErrorMessage>{errors.job?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.bio} gridColumn="span 2">
        <FormLabel>Bio</FormLabel>
        <Textarea {...register("bio")} placeholder="Bio" />
        <FormErrorMessage>{errors.bio?.message}</FormErrorMessage>
      </FormControl>

      <Center mt="8" gridColumn="span 2" gap="4">
        <Button minW="150px" type="submit" isLoading={isPending}>
          Save
        </Button>
        <Button minW="150px" variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </Center>
    </SimpleGrid>
  );
}

export default UserInfoForm;
