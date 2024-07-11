import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import useLogin from "../../hooks/useLogin";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

function RegisterFrom() {
  const { isPending } = useLogin();
  const {
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });
  return (
    <>
      <Box as="form" py="20" maxW="md" mx={"auto"}>
        <FormControl isInvalid={!!errors?.username}>
          <Input placeholder="username" {...register("username")} />
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
    </>
  );
}

export default RegisterFrom;
