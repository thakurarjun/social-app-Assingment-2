import { Box, Button, Image, Text } from "@chakra-ui/react";
import { landingImage } from "../assets/export";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Home = () => {
const navigate  = useNavigate()
  const handleForSignup = () => {
navigate("/signup")
toast.success("Please filled given details")
  }
  const handleForLogin = () => {
    navigate("/login")
    toast.success("Please enter your details")
  }
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      h={"100vh"}
      alignItems={"center"}
      w="80%"
      mx="auto"
    >
      <Box>
        <Box>
          <Text fontSize="6xl" as="em" color="red">
            SocialHub
          </Text>
        </Box>
        <Box display={"flex"} mt={"10%"}>
          <Text fontSize="4xl" color="gray">
            FOLLOW
          </Text>
          <Text fontSize={"sm"}>PEOPLE AROUND THE GLOBE</Text>
        </Box>
        <Box display={"flex"} mt={"10%"}>
          <Text fontSize="4xl" color="gray">
            CONNECT
          </Text>
          <Text fontSize={"sm"}>WITH YOUR FRIENDS</Text>
        </Box>
        <Box display={"flex"} mt={"10%"}>
          <Text fontSize="4xl" color="gray">
            SHARE
          </Text>
          <Text fontSize={"sm"}>WHAT YOU THINKING</Text>
        </Box>
        <Box mt={"10%"} w="full" h="50%">
          <Button w="100%" bg="red">
            <Text color="white"onClick={handleForSignup}>Join Now</Text>
          </Button>
        </Box>
        <Box mt={"4%"} w="full" h="50%">
          <Button w="100%" bg="red">
            <Text color="white" onClick={handleForLogin}>Already have an account?</Text>
          </Button>
        </Box>
      </Box>
      <Box
        h="90vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        boxSize="lg"
      >
        <Image src={landingImage} alt="Dan Abramov" />
      </Box>
    </Box>
  );
};

export default Home;
