import axios from "axios";

const api = axios.create({
  baseURL: "https://5fc9346b2af77700165ae514.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;