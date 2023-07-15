import axios from 'axios';
axios.defaults.baseURL = 'https://64b2d64a38e74e386d55a0de.mockapi.io/contacts';

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const addContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};