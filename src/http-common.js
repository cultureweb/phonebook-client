import axios from "axios";
// Default config options
const defaultOptions = {
  baseURL: "https://phonebook-server-api.herokuapp.com/api/v1",
  // baseURL: "http://localhost:42001/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

// Create instance
const http = axios.create(defaultOptions);

//Set the AUTH token for any request
// http.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   console.log({ token });
//   // config.headers.Authorization = token ? `Bearer ${token}` : "";
//   config.headers.Authorization = token ? token : "";
//   return config;
// });

export default http;
