import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";
import { Avatar, Box, Button, Divider, Heading, Icon, Input, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import {
  BsDot,
  BsFillBookmarkFill,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Posts = () => {
const [postData,setPostData] = useState({});
const {state} = useLocation();
useEffect(()=>{
  if(state) {
    setPostData(state.singlePost)
  }
},[state])

  return (
    <Box w="100%" bg="gray.100">
      <Header />
      <Layout>
        <Box display="flex" justifyContent={"space-between"}>
          <Box w="60%">
            <Box p={4} bg="white" mt={4} shadow={"lg"}>
              <Box display="flex" gap={4}>
                <Icon mt={3} as={AiOutlineArrowLeft} />
                <Heading size={"lg"} color={"black"}>
                  Post
                </Heading>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                <Box display={"flex"} gap={4} mt={1}>
                  <Avatar src={postData.img} />
                  <Text fontSize={"lg"}>{postData.fullName}</Text>
                </Box>
                <Box mt={1}>
                  <Icon as={BsThreeDots} />
                </Box>
              </Box>
              <Box w="77%" mx="auto">
                
                <Box mt={5}>
                  <Text>
                   {postData.content}
                  </Text>
                  <Box display="flex" gap={4} mt={3}>
                    <Text color="gray">{moment(postData.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</Text>
                   
                  </Box>
                </Box>
                <Divider />
                <Box mt={2}>
                  <Heading size="sm" mb={4}>
                    {postData?.likes?.likeCount} Likes
                  </Heading>
                </Box>
              </Box>

              <Divider />
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
                <Icon as={BsFillBookmarkFill} h={6} w={6} />
              </Box>
              <Divider mt={4} />

              <Box display="flex" mt={4} justifyContent={"space-between"} w="full">
              <Box><Avatar icon={<AiOutlineUser fontSize="1.5rem" />} /></Box>
              <Box w="63%">
              <Input placeholder='Comment your reply' size='md'shadow="lg" />

              </Box>
              <Box w="23%">
                <Button bg='red' w="50%"><Text color="white">Post</Text></Button>
              </Box>
              </Box>
          <Divider mt={4} />
              <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                <Box display={"flex"} gap={4} mt={1}>
                  <Avatar icon={<AiOutlineUser fontSize="1.5rem" />} />
                  <Text fontSize={"lg"}>Ashwin  Kumar 
                  <Text color="gray" fontSize={"sm"}>Replying to <span color="red">@arjunsingh</span></Text>
                   </Text>
                  <Text color="gray"> @ashwinkumar</Text>
                  <Text color="gray"> 1 min ago </Text>
                </Box>
                <Box mt={1}>
                  <Icon as={BsThreeDots} />
                </Box>
              </Box>
        <Box ml={65}>
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
                <Icon as={BsFillBookmarkFill} h={6} w={6} />
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

export default Posts;
