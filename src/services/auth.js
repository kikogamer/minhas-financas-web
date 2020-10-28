const TOKEN_KEY = '@minhas-financas-Token';

const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export default login;
