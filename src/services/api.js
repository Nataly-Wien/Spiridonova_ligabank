import axios from 'axios';

const BACKEND_URL = `https://openexchangerates.org/api`;
const REQUEST_TIMEOUT = 15000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    throw response.status;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
