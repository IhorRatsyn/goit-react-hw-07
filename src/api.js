import axios from "axios";

const url = "https://65e1d1c8a8583365b3176307.mockapi.io";

const options = {};

export const getContacts = () => {
  return axios
    .get(`${url}/contacts`, options)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

export const addContacts = (data) => {
  return axios
    .post(`${url}/contacts`, options)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

export const deleteContacts = (id) => {
  return axios
    .delete(`${url}/contacts/${id}`, options)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};
