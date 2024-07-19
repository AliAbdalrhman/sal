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

const QuestionCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Flex gap="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Text fontSize="lg" fontWeight="600">
                  Segun Adebayo
                </Text>
                <Text fontSize="sm" color="#A1A2A3">
                  Creator, Chakra UI
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
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

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <ButtonGroup variant="unstyled" spacing="6">
            <ActionButton Icon={<UpArrowIcon />} count="12" isFilled={true} />
            <ActionButton Icon={<DownArrowIcon />} count="2" isFilled={false} />
            <ActionButton Icon={<ShareIcon />} count="4" isFilled={true} />
          </ButtonGroup>
          <Text color="#707070" fontSize="md">
            19/7/2024
          </Text>
        </CardFooter>
      </Card>
    </>
  );
};

export default QuestionCard;
