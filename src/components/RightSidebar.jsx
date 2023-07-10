import {
  Avatar,
  Box,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getFromLocalStorage } from "../helpers";
import { toast } from "react-hot-toast";

const RightSidebar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const encodedToken = getFromLocalStorage("token");

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      if (response.ok) {
        const responseData = await response.json();
        setUserData(responseData.users);
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.log("Request failed:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    fetchUserId();
  }, []);

  const fetchUserId = async (user) => {
    try {
      var userId = user._id;
      const response = await axios.get(
        `http://localhost:3000/api/users/${userId}`
      );

      navigate(`/user/:${userId}`, {
        state: { singleUser: response.data.user, username: user.username },
      });
    } catch (error) {
      console.log("Request failed:", error);
    }
  };

  const handleFollowUser = (id) => {
    var followUserId = id;
    axios
      .post(
        `http://localhost:3000/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        console.log(res.data, "followww userdatae");
        toast.success("user follow successfully");

        fetchUserId();
        fetchUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnFollowUser = (id) => {
    var followUserId = id;

    axios
      .post(
        `http://localhost:3000/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        console.log(res.data, "unnnnfollowww userdatae");
        toast.success("user unfollow successfully");

        fetchUserId();
        fetchUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <InputGroup shadow={"lg"} bg="white" borderRadius="none">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search Posts, People, Anything" />
      </InputGroup>
      <Box mt={8} border="none" p={3} bg="white" shadow={"lg"}>
        <Box display="flex" justifyContent={"space-between"}>
          <Text fontSize={"lg"}>Who to Follow?</Text>
          <Text fontSize={"lg"} color="red">
            Show More
          </Text>
        </Box>
        <Divider mt={2} orientation="horizontal" />
        {userData.map((user, index) => (
          <Box display={"flex"} gap={10} mt={9} key={index}>
            <Box display="flex" gap={3}>
              <Avatar src={user?.img} />
              <Box
                onClick={() => fetchUserId(user)}
                style={{ cursor: "pointer" }}
              >
                <Text fontSize="md" fontWeight={"20rem"}>
                  {user?.fullName}
                </Text>
                <Text color="gray">@{user?.username}</Text>
              </Box>
            </Box>
            <Box display="flex" gap={2}>
              <Box display={"flex"}>
                <Box display={"flex"} style={{ cursor: "pointer" }}>
                  {user.followers.length === 0 ? (
                    <Box
                      onClick={() => handleFollowUser(user._id)}
                      display={"flex"}
                      gap={2}
                    >
                      <Text color="red">Follow</Text>
                      <Icon color="red" mt={1} as={AddIcon} />
                    </Box>
                  ) : (
                    <Box onClick={() => handleUnFollowUser(user._id)}>
                      <Text color="red">Following</Text>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RightSidebar;
