import axios, { Axios } from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const http = {
  put: axios.put,
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};

export default http;
