import axios from "axios";

export const fetchUsers = (controller) => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
  });
};

export const getUsers = (controller, onSuccess, onFailure) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
    .then(onSuccess)
    .catch(onFailure);
};

export const getUserPlaceholder = (controller) => {
  return axios.get("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
  });
};
