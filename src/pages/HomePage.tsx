import { Container } from "@chakra-ui/react";
import QuestionCard from "../components/QuestionCard";

function HomePage() {
  return (
    <>
      <Container maxW="container.md" py="8" px="10px">
        <QuestionCard />
      </Container>
    </>
  );
}

export default HomePage;
