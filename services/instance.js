import axios from "axios";

const baseURL = "https://reuniteme-backend.onrender.com/api";

// const baseURL = "http://localhost:5001/api";

// create an axios instance
const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL,
  // timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
  withCredentials: true,
});

export { instance, protectedInstance };
