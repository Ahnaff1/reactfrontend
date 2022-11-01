import axios from "axios";

const baseURL = "https://cynoorder.herokuapp.com/api/";

const apiCaller = axios.create({
  baseURL,
  withCredentials: true,
});

apiCaller.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err)
);

export default apiCaller;
