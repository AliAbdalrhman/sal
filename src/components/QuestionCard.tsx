import {
  Avatar,
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import UpArrowIcon from "../components/icons/UpArrowIcon";
import DownArrowIcon from "../components/icons/DownArrowIcon";
import ShareIcon from "../components/icons/ShareIcon";

import ActionButton from "../components/shared/ActionButton";
import { TimeAgo } from "./shared/TimeAgo";
import { OptionsIcon } from "./icons/OptionsIcon";

interface QuestionCardProps {
  question: Question;
}
const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <>
      <Card size={{ base: "sm", md: "md" }} borderRadius="2xl" boxShadow="md">
        <CardHeader>
          <Flex gap="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name={question.user.full_name}
                src={question.user.avatar}
              />

              <Box>
                <Text textTransform="capitalize" fontSize="lg" fontWeight="600">
                  {question.user.full_name}
                </Text>
                <Text textTransform="capitalize" fontSize="sm" color="#A1A2A3">
                  {question.user.job}
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant="unstyled"
              minW="auto"
              colorScheme="gray"
              aria-label="See menu"
              icon={<OptionsIcon />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize="lg">
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>

        <CardFooter justify="space-between" alignItems="center">
          <ButtonGroup variant="unstyled" spacing="6">
            <ActionButton Icon={<UpArrowIcon />} count="12" isFilled={true} />
            <ActionButton Icon={<DownArrowIcon />} count="2" isFilled={false} />
            <ActionButton Icon={<ShareIcon />} count="4" isFilled={true} />
          </ButtonGroup>
          <Text color="#707070" fontSize="md">
            <TimeAgo dateString={new Date().toDateString()} />
          </Text>
        </CardFooter>
      </Card>
    </>
  );
};

export default QuestionCard;
