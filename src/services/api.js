import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3003",
});

export default api;
