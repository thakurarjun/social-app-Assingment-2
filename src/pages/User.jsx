import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Avatar, Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import RightSidebar from "../components/RightSidebar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsFillBookmarksFill, BsShare, BsThreeDots } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { useLoaderData, useLocation } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [newUser,setNewUser] = useState({})
  const [userName,setUserName] = useState("")
  const {state} = useLocation();
  console.log(state,"state")

  useEffect(()=> {
if(state) {
  setNewUser(state.singleUser)
  setUserName(state.username)
}
  },[state])

  console.log(newUser,"newUser")

  const fetchPostByUser = async (username) => {
  
    try{
   const response = await axios.get(`/api/posts/user/${username}`)
   console.log(response,"===>userpost")
    }catch (error) {
      console.log("Request failed:", error);
    }
  }
  useEffect(()=> {
    fetchPostByUser()
  },[])
  
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
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src={newUser.img}
                  alt="Dan Abramov"
                />
                <Box mt={2}>
                  <Text fontSize={"2xl"}>{newUser.fullName}</Text>
                  <Text fontSize={"md"} color="gray">
                   @{newUser.username}
                  </Text>
                  <Button bg="red" mt={1} border={"1px solid gray"} w="100px">
                    <Text color="white">Follow</Text>
                  </Button>
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
                  <Text ml={7}>0</Text>
                  <Text>Following</Text>
                </Box>
                <Box>
                  {" "}
                  <Text ml={3}>2k</Text>
                  <Text>Posts</Text>
                </Box>
                <Box>
                  {" "}
                  <Text ml={4}>37.7k</Text>
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
            <RightSidebar 
            newUser={newUser} />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default User;
