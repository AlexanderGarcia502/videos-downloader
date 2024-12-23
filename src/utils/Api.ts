import axios from "axios";

export const BASE_URL =
  "https://videos-downloader-backend-w4l6.onrender.com/api/youtube";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    //'Access-Control-Allow-Origin': '*'
    //'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true,
});
