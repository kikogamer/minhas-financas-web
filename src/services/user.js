import { api } from './api';
import { isAuthenticated } from './auth';
import { getUserInfoFromStore, setUserInfoToStore } from './userStorage';

async function getUserInfoFromApi() {
  try {
    const resp = await api.get('/users/current');
    const user = resp.data;
    setUserInfoToStore(user);
    return user;
  } catch (err) {
    return {};
  }
}

async function getUserInfo() {
  if (!isAuthenticated) return {};

  let user = getUserInfoFromStore();

  if (!user) user = await getUserInfoFromApi();

  return user;
}

export default getUserInfo;
