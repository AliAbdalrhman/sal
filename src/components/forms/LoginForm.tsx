import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import useLogin from "../../hooks/useLogin";
import { GitHubIcon } from "../icons/GitHubIcon";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof schema>;

export default function LoginForm() {
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
    <>
      <VStack
        spacing="7"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        minH="445.89spx"
      >
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
        <HStack w="60%">
          <Divider borderColor="#A1A2A3" />
          <Text color="#A1A2A3" lineHeight="0">
            Or
          </Text>
          <Divider borderColor="#A1A2A3" />
        </HStack>
        <Button
          leftIcon={<GitHubIcon />}
          bg="black"
          _hover={{ opacity: 0.8 }}
          mb="25px"
        >
          Sign in with GitHub
        </Button>
      </VStack>

      {/* <Button colorScheme="blue">Button</Button>
      <Input border="2px" /> */}
    </>
  );
}
