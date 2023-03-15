import axios from "axios";

export const login = (email, password, controller) => {
  const body = {
    email,
    password,
  };
  const url = "https://urban-potato-gilt.vercel.app/auth";
  return axios.post(url, body, {
    signal: controller.signal,
  });
};

export const uploadImage = (img, controller) => {
  const formData = new FormData();
  formData.append("image", img);
  const url = "https://urban-potato-gilt.vercel.app/";
  return axios.post(url, formData, {
    signal: controller.signal,
  });
};
