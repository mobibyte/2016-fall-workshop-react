const TOKEN = 'token';
const USER = 'user';

export const storeLogin = (response) => {
  const { user, token } = response;

  localStorage.setItem(TOKEN, JSON.stringify(token));
  localStorage.setItem(USER, JSON.stringify(user));
}

export const clearLogin = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER);
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN));
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER));
}
