import axios from "axios";
import _ from "lodash";

const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
};

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    responseType: "json",
    headers: headers
});

instance.interceptors.request.use((config) =>
{
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = token;
    return config;
}, error => Promise.reject(error));

// ...(localStorage.getItem('token') ? {"Authorization": localStorage.getItem('token')} : {})
export default instance;
