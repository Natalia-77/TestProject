import axios from "axios";

export const url="http://localhost:8080/";
export default axios.create({
  baseURL:`${url}cats`,
  headers: {
    "Content-type": "application/json"
  }
});