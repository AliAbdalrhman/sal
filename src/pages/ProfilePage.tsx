import {
  Avatar,
  Card,
  CardBody,
  HStack,
  IconButton,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import useProfileQuery from "../hooks/useProfileQuery";
import ProfileInfoFormModal from "../components/forms/ProfileInfoForm";
import useUploadAvatar from "../hooks/useUploadAvatar";
import { useRef } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { updateProfile } from "../hooks/useProfile";
import { useQueryClient } from "@tanstack/react-query";
import Page from "../components/shared/Page";

function ProfilePage() {
  const { data: profileData, isLoading } = useProfileQuery();
  return (
    <Page docTitle="Profile">
      <Card maxW="container.lg" mx="auto" mt="8" borderRadius="2xl">
        <CardBody>
          <VStack textAlign="center">
            {isLoading ? (
              <ProfileSkeleton />
            ) : (
              <ProfileCard user={profileData} />
            )}
          </VStack>
        </CardBody>
      </Card>
    </Page>
  );
}

const ProfileCard = ({ user }: { user?: User }) => {
  const { mutate: uploadAvatar, isPending } = useUploadAvatar();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();
  return (
    <>
      <HStack
        ms="auto"
        w="calc(50% + 48px)"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Avatar
          opacity={isPending ? 0.5 : 1}
          cursor="pointer"
          src={user?.avatar}
          size="xl"
          bg="primary.500"
          onClick={() => {
            inputRef.current?.click();
          }}
        />

        <ProfileInfoFormModal />
      </HStack>
      {user?.avatar && (
        <HStack sx={{ button: { height: "auto" } }} mt="-5" mb="2" spacing="12">
          <IconButton
            aria-label="Edit Profile Picture"
            variant="unstyled"
            icon={<EditIcon color="primary.500" />}
            onClick={() => {
              const input = inputRef.current;
              if (input) {
                input.click();
              }
            }}
          />
          <IconButton
            aria-label="Delete Profile Picture"
            variant="unstyled"
            icon={<DeleteIcon color="red.500" />}
            onClick={() => {
              updateProfile({ avatar: "" }).then(() => {
                queryClient.invalidateQueries({
                  queryKey: ["profile"],
                });
              });
            }}
          />
        </HStack>
      )}

      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            uploadAvatar(file);
          }
        }}
      />
      <Text color="#A1A2A3">@{user?.username}</Text>
      <Text as="h1" fontSize="3xl" textTransform="capitalize" fontWeight="500">
        {user?.full_name}
      </Text>
      <Text color="#707070">{user?.job} </Text>
      <Text maxW="55ch" color="#536471">
        {user?.bio}
      </Text>
      <HStack
        spacing="8"
        my="4"
        fontSize="sm"
        fontWeight="500"
        justifyContent="center"
        color="#536471"
      >
        <HStack>
          <Text fontWeight="600">{user?.questions_count}</Text>
          <Text color="#A1A2A3">Questions</Text>
        </HStack>
        <HStack>
          <Text fontWeight="600">{user?.answers_count}</Text>
          <Text color="#A1A2A3">Answers</Text>
        </HStack>
      </HStack>
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
