
import { Box } from '@chakra-ui/react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

import Navigation from './routes/Navigation';
import { makeServer } from './server';
makeServer();

function App() {
  return (
   <Box>
    <BrowserRouter>
   <Navigation/>
    </BrowserRouter>
   </Box>
  );
}

export default App;
