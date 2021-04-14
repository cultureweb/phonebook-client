import axios from "axios";
import { API_URL } from "./config/config";

let defaultOptions;

// Default config options
defaultOptions = {
  baseURL: API_URL,

  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),

    // Authorization: token ? `Bearer ${token}` : "",
    // "x-access-token": localStorage.getItem("token"),
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
