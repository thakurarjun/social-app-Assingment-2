// import axios from 'axios';

// // helpers
// import { getFromLocalStorage, removeAllFromLocalStorage } from '../helpers';

// const baseURL = process.env.REACT_APP_BASE_URL;

// export const instance = axios.create({
//   baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// /**
//  * handle config for get/post
//  */
// const handleConfig = (config) => {
//   const token = getFromLocalStorage('token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// };
// // handle request interceptor 
// instance.interceptors.request.use(
//   (config) => handleConfig(config),
//   (error) => Promise.reject(error),
// );

// // logout on getting status 401 from any api
// const logout = () => {
//   removeAllFromLocalStorage();
//   window.location.replace('/login');
// };

// // handle response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401) {
//       logout();
//     } else {
//       return Promise.reject(error.response);
//     }
//   },
// );
// export default instance;