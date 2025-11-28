import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "http://localhose:5500/api",
    withCredentials: true
})