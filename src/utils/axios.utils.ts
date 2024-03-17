import axios from "axios";

const customBaseUrl = axios.create({
  baseURL: "https://tinyhousing-backend-ezprh.ondigitalocean.app/api/v1",
  headers: {
    Accept: "application/json",
  },
});

export default customBaseUrl;
