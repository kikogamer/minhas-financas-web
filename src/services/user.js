import { api } from './api';
import { isAuthenticated } from './auth';

const TOKEN_KEY = '@minhas-financas-UserInfo';

async function getUserInfoFromApi() {
  try {
    const resp = await api.get('/users/current');
    const user = { name: resp.data.name };
    localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
    return user;
  } catch (err) {
    return {};
  }
}

const getUserInfoFromStore = () => JSON.parse(localStorage.getItem(TOKEN_KEY));

async function getUserInfo() {
  if (!isAuthenticated) return {};

  let user = getUserInfoFromStore();

  if (!user) user = await getUserInfoFromApi();

  return user;
}

export default getUserInfo;
