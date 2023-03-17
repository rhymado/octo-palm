import axios from "axios";

export const login = (email, password, controller) => {
  const body = {
    email,
    password,
  };
  // eslint-disable-next-line no-undef
  const url = `${process.env.REACT_APP_SERVER_HOST}/auth`;
  return axios.post(url, body, {
    signal: controller.signal,
  });
};

export const uploadImage = (img, controller) => {
  const formData = new FormData();
  formData.append("image", img);
  // eslint-disable-next-line no-undef
  const url = `${process.env.REACT_APP_SERVER_HOST}`;
  return axios.post(url, formData, {
    signal: controller.signal,
  });
};
