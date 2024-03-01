import axios from "axios";

const BASE_URL = "https://65e1d1c8a8583365b3176307.mockapi.io/contacts";

export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const createContact = async (newContact) => {
  const response = await axios.post(`${BASE_URL}/contacts`, newContact);
  return response.data;
};

export const removeContact = async (id) => {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
};

const getFilteredContacts = () => {
  if (!Array.isArray(contacts)) {
    return []; // or handle the case where contacts is not an array
  }
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );
};
