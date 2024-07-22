import {
  Box,
  Card,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

function QuestionSkeleton() {
  return (
    <Card borderRadius="2xl" p="8" boxShadow="md" width="100%">
      <HStack spacing="3">
        <SkeletonCircle size="48px" />
        <Box>
          <SkeletonText noOfLines={1} w="100px" />
          <SkeletonText noOfLines={1} w="120px" mt="2" minH="24px" />
        </Box>
      </HStack>
      <SkeletonText noOfLines={3} mt="6" />
    </Card>
  );
}

export default QuestionSkeleton;
