import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

export const getProtectedResource = () => {
  return axios.get(API_URL + "protected-resource", { headers: authHeader() });
};
