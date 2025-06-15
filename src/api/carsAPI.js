import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getCars = async (page = 1, filters = {}) => {
  const { data } = await instance.get('/cars', {
    params: { page, limit: 12, ...filters },
  });
  return data;
};
