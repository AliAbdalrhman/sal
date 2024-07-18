import {
  Avatar,
  Card,
  CardBody,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import useProfileQuery from "../hooks/useProfileQuery";
import ProfileInfoFormModal from "../components/forms/ProfileInfoForm";

function ProfilePage() {
  const { data: profileData, isLoading } = useProfileQuery();
  return (
    <Card maxW="container.lg" mx="auto" mt="8" borderRadius="2xl">
      <CardBody>
        <VStack textAlign="center">
          {isLoading ? <ProfileSkeleton /> : <ProfileCard user={profileData} />}
        </VStack>
      </CardBody>
    </Card>
  );
}

const ProfileCard = ({ user }: { user?: User }) => {
  return (
    <>
      <HStack
        ms="auto"
        w="calc(50% + 48px)"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Avatar src={user?.avatar} size="xl" />

        <ProfileInfoFormModal />
      </HStack>
      <Text color="#A1A2A3">@{user?.username}</Text>
      <Text as="h1" fontSize="3xl" textTransform="capitalize" fontWeight="500">
        {user?.full_name}
      </Text>
      <Text color="#707070">{user?.job} </Text>
      <Text maxW="55ch" color="#536471">
        {user?.bio}
      </Text>
    </>
  );
};

const ProfileSkeleton = () => {
  return (
    <>
      <SkeletonCircle size="96px" />
      <SkeletonText noOfLines={1} w="10ch" />
      <SkeletonText my={2} noOfLines={1} w="20ch" />
      <SkeletonText noOfLines={1} w="15ch" />
      <SkeletonText
        mt={2}
        noOfLines={2}
        w="55ch"
        sx={{ div: { mx: "auto" } }}
      />
    </>
  );
};

export default ProfilePage;
