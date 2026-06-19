import axios from "axios";

const api = axios.create({
 baseURL: "https://onlinebrewbackend.onrender.com"
});

export default api;