import { Avatar, Box, Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { BsRocketTakeoff, BsBookmarks } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.authUser);

  return (
    <Box p={8} bg="gray.100">
      <Box>
        <Link to="/dashboard">
          <Box
            display="flex"
            gap={3}
            bg={pathname === "/dashboard" && "red.400"}
            p={2}
            _hover={{ bg: "red.400", color: "white" }}
          >
            <Icon as={BiHomeAlt2} mt={1} />
            <Text>Home</Text>
          </Box>
        </Link>
        <Link to="/explore">
          <Box
            display="flex"
            gap={3}
            mt={3}
            bg={pathname === "/explore" && "red.400"}
            _hover={{ bg: "red.400", color: "white" }}
            p={2}
          >
            <Icon as={BsRocketTakeoff} mt={1} />
            <Text>Explore</Text>
          </Box>
        </Link>
        <Link to="/bookmark">
          <Box
            display="flex"
            gap={3}
            mt={3}
            p={2}
            bg={pathname === "/bookmark" && "red.400"}
            _hover={{ bg: "red.400", color: "white" }}
          >
            <Icon as={BsBookmarks} mt={1} />
            <Text>Bookmark</Text>
          </Box>
        </Link>

        <Link to="/profile">
          <Box
            display="flex"
            gap={3}
            mt={3}
            bg={pathname === "/profile" && "red.400"}
            _hover={{ bg: "red.400", color: "white" }}
            p={2}
          >
            <Icon as={CgProfile} mt={1} />
            <Text>Profile</Text>
          </Box>
        </Link>
      </Box>

      <Box
        display={"flex"}
        mt={64}
        gap={3}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/profile")}
      >
        <Avatar src={user?.img} />
        <Box>
          <Text fontSize="lg">{user?.fullName}</Text>
          <Text color="gray">@{user?.username}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
