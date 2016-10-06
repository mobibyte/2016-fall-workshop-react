import cookie from 'react-cookie';

const TOKEN = 'token';
const USER = 'user';

export const storeLogin = (response) => {
  const { user, token } = response;

  cookie.save(TOKEN, token);
  cookie.save(USER, user);
}

export const clearLogin = () => {
  cookie.remove(TOKEN);
  cookie.remove(USER);
}

export const getToken = () => {
  return cookie.load(TOKEN)
}

export const getUser = () => {
  return cookie.load(USER)
}
