import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const signup = (fullname: string, email: string, password: string) => {
  return axios.post(API_URL + "signup", {
    fullname,
    email,
    password,
  });
};

export const signin = (email: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

// export const signout = () => {
//   localStorage.removeItem("user");
// };

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
