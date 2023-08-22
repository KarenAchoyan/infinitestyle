import axios from "axios";

let accessToken =
  typeof window !== "undefined" && localStorage.getItem("accessToken");

const headers = {};

if (accessToken) {
  headers["Authorization"] = `barer ${accessToken}`;
}

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers,
});

export const handleHeaders = (token = "") => {
  accessToken = token;
  axiosInstance.defaults.headers["Authorization"] = `barer ${token}`;
  localStorage.setItem("accessToken", token);
};

export const baseUrl  = process.env.IMAGE_URL;

export const deleteToken = () => {
  delete axiosInstance.defaults.headers["Authorization"];
};

export const handleLogout = () => {
  try {
    deleteToken();
    if (window) {
      localStorage.clear();
      window.location.href = "/";
    }
  } catch (e) {
    console.log(e);
  }
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      handleLogout();
    }

    return error;
  }
);

export default axiosInstance;