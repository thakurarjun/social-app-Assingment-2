
import {
    Avatar,
    Box,
    Button,
    Heading,
    Icon,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import Header from "../components/Header";
  import Layout from "../components/Layout";
  import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
  import {
    BsBookmarks,
    BsFillBookmarkFill,
    BsShare,
    BsThreeDots,
  } from "react-icons/bs";
  import { BiMessageAlt } from "react-icons/bi";
  import RightSidebar from "../components/RightSidebar";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import { getFromLocalStorage } from "../helpers";

const Bookmarks = () => {
  const [bookmark,setBookmark] = useState({})
const {state} = useLocation();
console.log(state,"bokmarkdstate datats")

const encodedToken  = getFromLocalStorage("token")

const fetchBookmarkData = () => {
  axios.get("api/users/bookmark",
  {headers:{authorization:encodedToken}})
  .then((res) => {
    console.log(res,"bookamrk resssponseeeee");
    setBookmark(res.data)
  })
  .catch((err) => {
    console.log(err);
  });
 }

useEffect(() => {
  fetchBookmarkData()
},[])
  
  return (
    <Box w="100%" bg="gray.100">
      <Header />
      <Layout>
        <Box display="flex" justifyContent={"space-between"}>
          <Box w="60%">
            <Box mt={5}>
              <Heading size={"lg"} color={"black"}>
              Your Bookmarks
              </Heading>
            </Box>
            <Box p={4} bg="white" mt={4} shadow={"lg"}>
              {bookmark?.bookmarks?.map((item,index) => (
                <>
                 <Box display={"flex"} justifyContent={"space-between"} mt={2} key={index}>
                 <Box display={"flex"} gap={4} mt={1}>
                   <Avatar src={item?.img} />
                   <Text fontSize={"lg"}>{item?.fullName}</Text>
                   <Text color="gray">{item.username}</Text>
                   <Text color="gray">{moment(item?.updatedAt).fromNow()}</Text>
                 </Box>
                 <Box mt={1}>
                   <Icon as={BsThreeDots} />
                 </Box>
               </Box>
               <Box w="77%" mx="auto">
                 <Box>
                   <Text>{item?.content}</Text>
                 </Box>
               </Box>
               <Box ml={10} mt={5}>
               <Heading as='h5' size='sm'>{item?.likes?.likeCount} likes</Heading>
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
               </>
              ))}
             
            </Box>

          

          </Box>

          <Box w="35%" p={5}>
            <RightSidebar />
          </Box>
        </Box>
      </Layout>
    </Box>
  )
}

export default Bookmarks