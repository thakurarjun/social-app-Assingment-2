import React from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signupSuccess } from "../redux/reducers/authSlice";

const schema = yup.object({
  fullName: yup.string().required("Enter your full name"),
  username: yup.string().required("Enter your user name"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(5).max(16).required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
}).required();

const Signup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const handleSignup = async (data) => {
    console.log(data);
    const apiData = {
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      password: "123456",
    };
    console.log(apiData, "+====>apiData");
  
    try {
      const response = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData,"signupreposne");
        dispatch(signupSuccess(responseData))
        navigate("/dashboard")
        toast.success("You have loggedin successfully")
      } else {
        console.log('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log('Request failed:', error);
    }
  };

 const handleHaveAccount = () => {
  navigate("/login")
  toast.success("Please enter your email or password")
 }

  return (
    <Box bg={"gray.100"}>
      <Box>
        <Box>
          <Flex justify="center" align="center" h={"100vh"}>
            <Center>
              <Box>
                <Box w={450} bg="white" p={5}>
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Heading as="h1" size={"lg"} color={"black"}>
                      Signup
                    </Heading>
                  </Box>
                  <FormControl w={80} mx="auto" mt={4}>
                    <FormLabel>
                      {" "}
                      <Text as="b">Full Name</Text>
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Arjun Singh"
                      shadow={"lg"}
                      {...register("fullName")} 
                    />
                    <p color="red">{errors.fullName?.message}</p>
                    <FormLabel mt={3}>
                      {" "}
                      <Text as="b">UserName</Text>
                    </FormLabel>
                    <Input type="text" placeholder="arjunsingh"
                     shadow={"lg"}
                     {...register("username")}  />
                    <p color="red">{errors.username?.message}</p>
                    <FormLabel mt={3}>
                      {" "}
                      <Text as="b">Email address</Text>
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="arjun@neog.camp"
                      shadow={"lg"}
                      {...register("email")}
                    />
                    <p color="red">{errors.email?.message}</p>
                    <FormLabel mt={3}>
                      <Text as="b">Password</Text>
                    </FormLabel>
                    <Input
                      type="password"
                      w={80}
                      placeholder="********"
                      shadow="lg"
                      {...register("password")}
                    />
                    <p color="red">{errors.password?.message}</p>
                    <FormLabel mt={3}>
                      <Text as="b">Confirm Password</Text>
                    </FormLabel>
                    <Input
                      type="password"
                      w={80}
                      placeholder="********"
                      shadow="lg"
                      {...register("confirmPassword")}
                    />
                    <p color="red">{errors.confirmPassword?.message}</p>
                  </FormControl>

                  <Box
                    display={"flex"}
                    w={80}
                    mx={"auto"}
                    mt={6}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      {" "}
                      <Checkbox size="md" colorScheme="red">
                        <Text as="b"> I accept all Terms & Conditions</Text>
                      </Checkbox>
                    </Box>
                  </Box>

                  <Box
                    mt={5}
                    mb={3}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Button
                      colorScheme="blackAlpha"
                      w={80}
                      bg="red"
                      shadow="lg"
                      onClick={handleSubmit(handleSignup)}
                    >
                      <Text color="white">Create New Account</Text>
                    </Button>
                  </Box>
                  <Box
                    mt={5}
                    mb={3}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Button w={80} shadow="lg" bg="red">
                      <Text color="white"onClick={handleHaveAccount}>Already have an account?</Text>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
