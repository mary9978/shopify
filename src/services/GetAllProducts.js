import http from "./httpServices";
import axios from "axios";
export const GetAllProducts = () => {
  return axios.get("http://localhost:5000/api/product");
};
