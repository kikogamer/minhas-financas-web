import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const GetApiError = (error) => {
  const responseError = { validationError: false, messages: [] };

  if (error.response && error.response.data && error.response.data.errors) {
    responseError.validationError = true;
    responseError.messages.push(error.response.data.errors);
  } else if (error.response && error.response.data && error.response.data.message) {
    responseError.messages.push(error.response.data.message);
  } else {
    responseError.messages.push('Ocorreu um erro ao obter informações do servidor, por favor tente novamente!');
  }
  return responseError;
};
