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
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setToLocalStorage } from "../helpers";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/authSlice";

const schema = yup.object({
  username: yup.string().required("username is required"),
  password: yup.string().min(5).max(16).required("Password is required"),
})

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  
  const handleLogin = async (data) => {
    const apiData = {
      username:data.username,
      password:data.password
    }
    console.log(apiData,"===>loginapidata")
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData,"===>rsponelogindata");
        dispatch(loginSuccess(responseData))
        setToLocalStorage("token",responseData.encodedToken)
        setToLocalStorage("user",responseData.foundUser)
        navigate("/dashboard")
        toast.success("You have loggedin successfully")
      } else {
        console.log('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log('Request failed:', error);
    }
  }
  const handleNewAccount = () => {
    navigate("/signup")
    toast.success("Please filled all details")
  }
  return (
    <Box bg="gray.100">
      <Box>
        <Box>
          <Flex justifyContent="center" align="center" h={"100vh"}>
            <Center>
              <Box>
                <Box w={450} bg="white" p={5}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Heading size={"lg"} color={"black"}>
                      Login
                    </Heading>
                  </Box>
                  <FormControl w={80} mx="auto" mt={4}>
                    <FormLabel>
                      {" "}
                      <Text as="b">UserName</Text>
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="arjunsingh"
                      shadow={"lg"}
                      {...register("username")}
                    />
                      <p color="red">{errors.username?.message}</p>
                    <FormLabel mt={5}>
                      <Text as="b">Password</Text>
                    </FormLabel>
                    <Input
                      type="password"
                      w={80}
                      placeholder="enter password"
                      shadow="lg"
                      {...register("password")}
                    />
                      <p color="red">{errors.password?.message}</p>
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
                        <Text as="b"> Remember me</Text>
                      </Checkbox>
                    </Box>
                    <Box>
                      <Text as="b" color={"blue"}>
                        Forgot your password?
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    mt={5}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Button
                      colorScheme="blackAlpha"
                      w={80}
                      bg="red"
                      shadow="lg"
                      onClick={handleSubmit(handleLogin)}
                    >
                      <Text color="white">Login</Text>
                    </Button>
                  </Box>
                  <Box
                    mt={5}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Button
                      colorScheme="blackAlpha"
                      w={80}
                      bg="red"
                      shadow="lg"
                    >
                      <Text color="white" onClick={handleNewAccount}>Create New Account</Text>
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

export default Login;
