import axios from 'axios';
import { getToken, logout } from './auth';
import { clearUserInfo } from './userStorage';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const GetApiError = (error) => {
  const responseError = { validationError: false, messages: [] };

  if (error.response && error.response.status === 401) {
    logout();
    clearUserInfo();
    responseError.messages.push('Não autorizado');
  } else if (error.response && error.response.data && error.response.data.errors) {
    responseError.validationError = true;
    responseError.messages.push(error.response.data.errors);
  } else if (error.response && error.response.data && error.response.data.message) {
    responseError.messages.push(error.response.data.message);
  } else {
    responseError.messages.push('Ocorreu um erro ao obter informações do servidor, por favor tente novamente!');
  }
  return responseError;
};
