import {
  Avatar,
  Button,
  Card,
  CardBody,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import useProfileQuery from "../hooks/useProfileQuery";
import UserInfoForm from "../components/forms/UserInfoForm";

function ProfilePage() {
  const { data: profileData, isLoading } = useProfileQuery();
  return (
    <Card maxW="container.lg" mx="auto" mt="8" borderRadius="2xl">
      <CardBody>
        <VStack textAlign="center">
          {isLoading ? (
            <ProfileSkeleton />
          ) : (
            <>
              <HStack
                ms="auto"
                w="calc(50% + 48px)"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Avatar src={profileData?.data.avatar} size="xl" />

                <ProfileInfoFormModal />
              </HStack>
              <Text color="#A1A2A3">@{profileData?.data.username}</Text>
              <Text
                as="h1"
                fontSize="3xl"
                textTransform="capitalize"
                fontWeight="500"
              >
                {profileData?.data.full_name}
              </Text>
              <Text color="#707070">{profileData?.data.job} </Text>
              <Text maxW="55ch" color="#536471">
                {profileData?.data.bio}
              </Text>
            </>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
}

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

const ProfileInfoFormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        ms="auto"
        variant="link"
        fontWeight="500"
        _hover={{ textDecoration: "none" }}
      >
        Edit Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent pb="10" pt="4">
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserInfoForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProfilePage;
