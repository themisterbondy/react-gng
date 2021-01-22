import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://youpet.herokuapp.com/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  console.log("token: " + token);
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

export default api;
