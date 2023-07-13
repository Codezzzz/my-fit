import axios from "axios";

const client = axios.create({
  withCredentials: false,
  timeout: 1000 * 60 * 10,
});

client.defaults.baseURL = "http://example.com";

export { client };
