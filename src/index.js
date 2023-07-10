import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { makeServer } from "./server";
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';

//call make server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <ChakraProvider>
     <Toaster />
     <App />
     </ChakraProvider>
     </Provider>
  </React.StrictMode>
);


