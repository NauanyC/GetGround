import axios from "axios";

const api = axios.create({
  baseURL: "http://nyx.vima.ekt.gr:3000/api/books",
});

export default api;
