import { getToken } from './auth';

export const fetchWithAuth = (url) => {
  const options = {
    method: 'GET',
    headers:{
      'Authorization': 'Bearer ' + getToken().token
    }
  };

  return fetch(url, options);
}

export const createUrl = (path) => {
  //return `http://localhost:3000${path}`;
  return `https://api-mobi.herokuapp.com${path}`;
}

export const checkRequest = (response) => {
  const valid = (response.status >= 200 && response.status < 300);
  return response.json().then(res => {
    if(valid) {
      return res;
    } else {
      throw new Error(res.error);
    }
  })
  .catch(e => {
    // Fuck it ship it
    if(valid) return true;
    else throw new Error(e.message);
  });
}
