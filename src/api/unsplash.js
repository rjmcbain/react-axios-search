import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c0d3f90b3f7212003f0d5e5314cb5180a5b59afc15a2eb3a4cefaca754d88cf7"
  }
});
