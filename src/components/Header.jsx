import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { removeAllFromLocalStorage } from "../helpers";
import { toast } from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
const handleHome = () => {
  navigate("/dashboard")
}

  const handleProfile = () => {
   navigate('/profile')
  }
  const handleLogout = () => {
    removeAllFromLocalStorage()
    navigate("/login")
    toast.success("You have logout successfuly")
  }
  return (
    <Box  p={2} display={"flex"} justifyContent={"space-between"} w="90%" mx="auto">

      <Box onClick={handleHome}>
        <Text ml={8} color="red" fontSize={"4xl"} as={"em"}>
          SocialHub
        </Text>
      </Box>
      
      <Box p={4} gap={3} display="flex">
      <Icon as={CgProfile}  h={6} w={6} onClick={handleProfile} style={{cursor:"pointer"}} />
       <Icon as={BiLogOut} h={6} w={6} onClick={handleLogout} style={{cursor:"pointer"}}/>
       

      </Box>

    </Box>
  );
};

export default Header;
