import React from "react";
import Layout from "../components/Layout";
import {
  Avatar,
  Box,
  Button,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import { AiOutlineDelete, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import {
  BsBookmark,
  BsBookmarks,
  BsEmojiSmile,
  BsFiletypeGif,
  BsFillBookmarksFill,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { MdOutlinePostAdd } from "react-icons/md";
import { BiMessageAlt } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { fakeFetch } from "../api/auth";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment/moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../helpers";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";

const schema = yup
  .object({
    content: yup.string().required(),
  })
  .required();

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);

  const encodedToken = getFromLocalStorage("token");

  const fetchPost = async (data) => {
    const postData = {
      content: data.content,
    };

    axios
      .post("api/posts", postData, {
        headers: {
          authorization: encodedToken,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Item added successfully")
        fetchPostData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLikePost = async (id) => {
    var postId = id

    axios.post(`api/posts/like/${postId}`,{},
      {headers:{authorization:encodedToken}})
      .then((res) => {
        toast.success("post liked successfully")
        fetchPostData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleDislikePost = (id) => {
    var postId = id
    axios.post(`api/posts/dislike/${postId}`,{},
    {headers:{authorization:encodedToken}})
    .then((res) => {
      toast.success("post disliked successfully")
      fetchPostData();
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const handleDeletePost = async (id) => {
    var postId = id
     try{
        const res = await fetch(`api/posts/${postId}`
        ,{method:"DELETE",headers:{authorization: encodedToken,}})
        if(res.ok) {
          const resData = await res.json();
          toast.success("Item remove successfully")
          fetchPostData();
        } else {
          console.log("Request failed with status:", res.status);
        }
     } catch (error) {
      console.log("Request failed:", error);
    }
  }
 
  const handleAddBookmark = (id) => {
   var postId = id
   axios.post(`api/users/bookmark/${postId}`,{},
   {headers:{authorization:encodedToken}})
   .then((res) => {
    //  navigate("/bookmark",{state:{bookmarkData:res.data}})
     toast.success(" bookmark added succesfully")
     fetchPostData();
   })
   .catch((err) => {
     console.log(err);
   });
  }

// const handleRemoveBookmark = (id) => {
//  var postId = id
//  axios.post(`api/users/remove-bookmark/${postId}`,{},
//  {headers:{authorization:encodedToken}})
//  .then((res) => {
//    toast.success("bookmark removed succesfully")
//    fetchPostData();
//  })
//  .catch((err) => {
//    console.log(err);
//  });
// }

  const fetchPostData = async () => {
    try {
      const response = await fetch("api/posts");
      if (response.ok) {
        const responseData = await response.json();
        const reverseData = await responseData.posts.reverse();
        setPostData(reverseData);
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.log("Request failed:", error);
    }
  };
  const fetchPostIdData = async (post) => {
    try {
      var postId = post._id;
      const response = await axios.get(
        `api/posts/${postId}`
      );
      // setUserIdData(response);
      console.log(response, "===>resposnepostdata");
      navigate(`/posts/:${postId}`, {
        state: { singlePost: response.data.post },
      });
    } catch (error) {
      console.log("Request failed:", error);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    fetchPostIdData();
  }, []);

  return (
    <Box w="100%" bg="gray.100">
      <Header />
      <Layout>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box w="60%">
            <Box mt={8} p={5} bg="white" shadow={"lg"}>
              <Box display={"flex"} gap={3} w="100%" mt={5}>
                <Avatar icon={<AiOutlineUser fontSize="1.5rem" />} />
                <Box w="90%">
                  <Textarea
                    h="20vh"
                    bg="gray.100"
                    placeholder="Write something interesting..."
                    {...register("content")}
                  />
                </Box>
              </Box>

              <Box
                display={"flex"}
                mt={3}
                p={3}
                justifyContent={"space-between"}
              >
                <Box mt={2} display="flex" gap={5}>
                  <Icon as={BsEmojiSmile} />
                  <Icon as={GrGallery} />
                  <Icon as={BsFiletypeGif} />
                </Box>

                <Button bg="red" onClick={handleSubmit(fetchPost)}>
                  {" "}
                  <Text color="white">Post</Text>{" "}
                </Button>
              </Box>
            </Box>

            <Box mt={5} display={"flex"} justifyContent={"space-between"}>
              <Text fontSize={"xl"}>Latest Posts</Text>
              <Icon as={MdOutlinePostAdd} />
            </Box>
            {postData.map((item,index) => (
              <Box p={4} bg="white" mt={4} shadow={"lg"} key={index} >
                <Box onClick={() => fetchPostIdData(item)}>
                  <Box display={"flex"} justifyContent={"space-between"} mt={4}>
                    <Box display={"flex"} gap={4} mt={1}>
                      <Avatar src={item?.img} alt="img" />
                      <Text fontSize={"lg"}>{item?.fullName}</Text>
                      <Text color="gray">@{item?.username}</Text>
                      <Text color="gray">
                        {moment(item?.updatedAt).fromNow()}
                      </Text>
                    </Box>
                    <Box>
                          <Icon
                            as={BsThreeDots}
                            style={{ cursor: "pointer" }}
                          />
                    </Box>
                  </Box>
                  <Box w="77%" mx="auto">
                    <Box>
                      <Text>{item?.content}</Text>
                    </Box>
                  </Box>
                </Box>
              <Heading as='h6' size='xs' mt={6}>
                <Text ml={17}> {item?.likes?.likeCount} likes</Text>
              </Heading>
                <Box
                  display={"flex"}
                  w="77%"
                  mx="auto"
                  mt={3}
                  justifyContent={"space-between"}
                >
                  <Box 
                  style={{ cursor: "pointer" }}>
                   {item?.likes?.likeCount === 0 ? 
                   
                    <Icon as={AiOutlineHeart} h={7} w={7}
                      onClick={()=>handleLikePost(item?._id)} /> 

                   : <Icon as={FcLike} h={7} w={7}
                    onClick={()=>handleDislikePost(item?._id)} />} 

                    </Box>
                 <Box>
                 <Icon as={BiMessageAlt} h={7} w={7}/>
                 </Box>
                  
                  <Box onClick={() => handleDeletePost(item._id)}
                    style={{ cursor: "pointer" }}>
                  <Icon
                    as={AiOutlineDelete}
                    h={7}
                    w={7}
                    
                  />
                  </Box>
                   <Box style={{ cursor: "pointer" }}>
                    
                   <Icon as={BsBookmarks} h={6} w={6} onClick={()=>handleAddBookmark(item._id)} />
                   {/* <Icon as={BsFillBookmarksFill} h={6} w={6} 
                   onClick={()=>handleRemoveBookmark(item._id)}
                   /> */}
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

export default Dashboard;
