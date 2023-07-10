import React, { useState } from "react";
import Header from "../components/Header";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import RightSidebar from "../components/RightSidebar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsFillBookmarksFill, BsShare, BsThreeDots } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Images = ["https://bit.ly/dan-abramov"];

const schema = yup
  .object({
    profile: yup.string().required(),
    fullname: yup.string().required(),
    username: yup.string().required(),
    bio: yup.string().required(),
    portfolio: yup.string().required(),
  })
  .required();

const Profile = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { user } = useSelector((state) => state.authUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(user, "===>authuser==>");

  const [editProfile,setEditProfile] = useState("")

  const handleEditProfile = (data) => {
    const apiData = {
      profile:data.profile,
      fullname:data.fullname,
      username:data.username,
      bio:data.bio,
      portfolio:data.portfolio
    }
    setEditProfile(apiData)
  };

  console.log(editProfile,"====>editProfiledata")
  const handleImages = (img) => {
    setSelectedAvatar(img);
  };
  return (
    <Box w="100%" bg="gray.100">
      <Header />
      <Layout>
        <Box display="flex" justifyContent={"space-between"}>
          <Box w="60%">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={5}
            >
              <Box>
                {Images.map((image,index) => (
                  <Image
                  key={index}
                    borderRadius="full"
                    boxSize="100px"
                    src={user?.img ?user?.img : selectedAvatar}
                    alt="Dan Abramov"
                    onClick={() => handleImages(Image)}
                  />
                ))}

                <Box mt={2}>
                  <Text fontSize={"2xl"} ml={5}>
                    {user?.fullName}
                  </Text>
                  <Text fontSize={"md"} color="gray" ml={3}>
                    {user?.username}
                  </Text>
                  <Button mt={1} border={"1px solid gray"} onClick={onOpen}>
                    Edit Profile
                  </Button>
                  <Modal
                    // initialFocusRef={initialRef}
                    // finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel>Add Profile</FormLabel>
                          <Input
                            placeholder="fullname"
                            type="file"
                            {...register("profile")}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Full name</FormLabel>
                          <Input
                            placeholder="Full Name"
                            {...register("fullname")}
                          />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>User name</FormLabel>
                          <Input
                            placeholder="User Name"
                            {...register("username")}
                          />
                        </FormControl>
                        <FormControl mt={4}>
                          <FormLabel>Bio</FormLabel>
                          <Input placeholder="User Bio" {...register("bio")} />
                        </FormControl>
                        <FormControl mt={4}>
                          <FormLabel>Portfolio URL</FormLabel>
                          <Input
                            placeholder="Portfolio URL"
                            {...register("portfolio")}
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={handleSubmit(handleEditProfile)}
                        >
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
                <Box w="100%" mt={4}>
                  <Text color="red"> Software Engineer </Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                mt={6}
                w="60%"
                display={"flex"}
                justifyContent={"space-between"}
                p={4}
                bg="white"
                mx="auto"
              >
                <Box>
                  <Text ml={7}>{user?.following?.length}</Text>
                  <Text>Following</Text>
                </Box>
                <Box>
                  {" "}
                  <Text ml={3}>2k</Text>
                  <Text>Posts</Text>
                </Box>
                <Box>
                  {" "}
                  <Text ml={4}>{user?.followers?.length}</Text>
                  <Text>Followers</Text>
                </Box>
              </Box>
            </Box>

            <Box mt={5}>
              <Text fontSize={"3xl"}>Your Posts</Text>
            </Box>

            <Box p={4} bg="white" mt={4} shadow={"lg"}>
              <Box display={"flex"} justifyContent={"space-between"} mt={4}>
                <Box display={"flex"} gap={4} mt={1}>
                  <Avatar icon={<AiOutlineUser fontSize="1.5rem" />} />
                  <Text fontSize={"lg"}>Arjun Singh</Text>
                  <Text color="gray">@arjunsingh</Text>
                  <Text color="gray">1 min</Text>
                </Box>
                <Box mt={1}>
                  <Icon as={BsThreeDots} />
                </Box>
              </Box>
              <Box w="77%" mx="auto">
                <Box>
                  <Text>Non programmers on my timeline. Attention.</Text>
                </Box>
                <Box mt={5}>
                  <Text>
                    After placing 100+ programmers i in top Indian startups, I
                    am thinking of coming up with a program for business roles
                    as well.
                  </Text>
                </Box>
                <Box mt={5}>
                  <Text>
                    Interested in helping me build this course? Join the
                    telegram group (in next tweet)
                  </Text>
                </Box>
              </Box>

              <Box
                display={"flex"}
                w="77%"
                mx="auto"
                mt={6}
                justifyContent={"space-between"}
              >
                <Icon as={AiOutlineHeart} h={7} w={7} />
                <Icon as={BiMessageAlt} h={7} w={7} />
                <Icon as={BsShare} h={6} w={6} />
                <Icon as={BsFillBookmarksFill} h={6} w={6} />
              </Box>
            </Box>
          </Box>

          <Box w="35%" p={5}>
            <RightSidebar />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Profile;
