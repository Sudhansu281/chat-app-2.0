import axios from "axios";
export const url = "https://chat-app-2-0-lzju.onrender.com";
export const axiosInstance = axios.create({
     headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});
