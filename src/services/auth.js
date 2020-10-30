const TOKEN_KEY = '@minhas-financas-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const login = (token) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);
