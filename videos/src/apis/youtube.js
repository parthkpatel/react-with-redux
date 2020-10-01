import axios from "axios";

const KEY = "AIzaSyD0OLpnA6NkWkxNrgs4BfnyM8akIA3715M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
