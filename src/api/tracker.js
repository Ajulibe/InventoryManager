import axios from "axios";

//the baseURL here is the ethernet IPv4Address.
//type IPConfig in the terminal
const instance = axios.create({
  baseURL: "http://12.96.91.34.bc.googleusercontent.com/api",
});

//a smarter and cleaner way to authenticate request
instance.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
