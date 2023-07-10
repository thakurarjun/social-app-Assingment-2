import {
  Avatar,
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import {
  BsBookmarks,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import RightSidebar from "../components/RightSidebar";
import moment from "moment";
import { FcLike } from "react-icons/fc";

const Explore = () => {
const [postData,setPostData] = useState([])
  const fetchPostData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData,"post response dataaa")
        const reverseData = await responseData.posts.reverse();
        setPostData(reverseData);
        console.log(responseData, "resposnepostdattaaaa");
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.log("Request failed:", error);
    }
  };

  useEffect(()=> {
    fetchPostData()
  },[])

  const hanldleTrendingBtn = () => {
    const filterPost = postData.filter((item) => item.likes.likeCount > 0)
    setPostData(filterPost)
  }

  const handleSortPost = () => {
    // const sortData = postData.sort((a,b) => a.createdAt - b.createdAt)
    // console.log(sortData,"sortdataaa")
    // setPostData(sortData)
    const sortData = [...postData].sort((a,b) => {
      new Date(b.createdAt)  - new Date(a.createdAt)
    })
    console.log(sortData,"sortdataaa")
     setPostData(sortData.reverse())
  }

  return (
    <Box w="100%" bg="gray.100">
      <Header />
      <Layout>
 <Box display="flex" justifyContent={"space-between"}>
 <Box w="60%">
   <Box mt={5}>
     <Heading size={"lg"} color={"black"}>
       Explore
     </Heading>
   </Box>
   <Box display="flex" mt={3} gap={8}>
     <Button border="1px solid black" onClick={() => handleSortPost()}>
       <Text>Sort By Date </Text>
     </Button>
     <Button border="1px solid black" onClick={()=>hanldleTrendingBtn()}>
       <Text>Trending</Text>
     </Button>
   </Box>
   {postData.map((item) =>(
    <Box p={4} bg="white" mt={4} shadow={"lg"}>
     <Box display={"flex"} justifyContent={"space-between"} mt={2}>
       <Box display={"flex"} gap={4} mt={1}>
         <Avatar src={item.img} />
         <Text fontSize={"lg"}>{item.fullName}</Text>
         <Text color="gray">@{item.username}</Text>
         <Text color="gray">{moment(item?.updatedAt).fromNow()}</Text>
       </Box>
       <Box mt={1}>
         <Icon as={BsThreeDots} />
       </Box>
     </Box>
     <Box w="77%" mx="auto">
       <Box>
         <Text>{item.content}</Text>
       </Box>
       
     </Box>

     <Box
       display={"flex"}
       w="77%"
       mx="auto"
       mt={6}
       justifyContent={"space-between"}
     >
      <Box
      style={{ cursor: "pointer" }}
      >
     {item?.likes?.likeCount === 0 ? 
                   
                   <Icon as={AiOutlineHeart} h={7} w={7}
                      /> 

                  : <Icon as={FcLike} h={7} w={7}
                    />} 

      </Box>
      <Box>
      <Icon as={BiMessageAlt} h={7} w={7} />
      </Box>
      
      <Box>
      <Icon as={BsShare} h={6} w={6} />
      </Box>
       <Box>
       <Icon as={BsBookmarks} h={6} w={6} />
       </Box>
       
     </Box>
   </Box>
   ))}
   

 </Box>

 <Box w="35%" p={5}>
   <RightSidebar />
 </Box>
</Box>
      </Layout>
    </Box>
  );
};

export default Explore;
