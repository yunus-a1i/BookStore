import axios from "axios";

const API_BASE_URL = "https://bookstore-1-o6p8.onrender.com"; // Your live backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
