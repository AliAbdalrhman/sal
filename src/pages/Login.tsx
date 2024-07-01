import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import useLogin from "../hooks/useLogin";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof schema>;

export default function Login() {
  const { mutate: login, isPending } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    login(data);
  };

  return (
    <Box
      as="form"
      py="20"
      maxW="md"
      mx={"auto"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors?.email}>
        <Input placeholder="Username" {...register("email")} />
      </FormControl>
      <FormControl isInvalid={!!errors?.password}>
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      </FormControl>

      <Button type="submit" isLoading={isPending}>
        Login
      </Button>
    </Box>
  );
}
