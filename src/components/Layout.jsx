import { Box } from '@chakra-ui/react';
import React from 'react'
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
  <Box display={"flex"} w="full">

    <Box w="23%"><Sidebar /></Box>
    <Box w="77%">{children}</Box>

  </Box>
  )
}

export default Layout;