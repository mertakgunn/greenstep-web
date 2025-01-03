import axiosClient from "../axios";

export const postAuthLogin = async (data) => {
  const response = await axiosClient.post("/auth/signin", data);
  return response.data;
};

export const postAuthRegister = async (data) => {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
};


export const getAuth = async () => {
  const response = await axiosClient.get("/auth/me");
  return response.data;
};

export const updateAuth = async (data) => {
  const response = await axiosClient.put("/auth/update", data);
  return response.data;
};