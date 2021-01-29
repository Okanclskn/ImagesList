import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 8-v6Gk5m1sGbdPmyT4qoDKEO0j9jRFetQFNM4urL9g8",
  },
});
