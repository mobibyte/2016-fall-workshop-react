import cookie from 'react-cookie';

// added some fluff at the end of token and user name values to reduce chance of conflict
const TOKEN = 'token-mobi-member';
const USER = 'user-mobi-member';

export const storeLogin = (response) => {
  const { user, token } = response;
  // need to add {path:'/' because front end sucks}
  cookie.save(TOKEN, token, {path:'/'});
  cookie.save(USER, user, {path:'/'});
}

export const clearLogin = () => {
  	cookie.remove(TOKEN, {path:'/'});
  	cookie.remove(USER, {path:'/'});
}

export const getToken = () => {
  return cookie.load(TOKEN)
}

export const getUser = () => {
  return cookie.load(USER)
}
