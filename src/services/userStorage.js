const TOKEN_KEY = '@minhas-financas-UserInfo';

export const clearUserInfo = () => localStorage.removeItem(TOKEN_KEY);
export const getUserInfoFromStore = () => JSON.parse(localStorage.getItem(TOKEN_KEY));
export const setUserInfoToStore = (userInfo) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(userInfo));
};
