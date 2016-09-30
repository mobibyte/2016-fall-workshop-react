import { createUrl, checkRequest } from '../utils/api';
import { storeLogin } from '../utils/auth';

export const login = (email, password) => {
  const body = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  };

  return fetch(createUrl('/auth/login'), body)
    .then(checkRequest)
    .then(req => {
      storeLogin(req);
      return req;
    });
}
export const forgotPasswordRequest = (email) => {
  const body = {
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-type':'application/json'
    },
    body: JSON.stringify({ email } )
  };
  return fetch(createUrl('/auth/forgotpass'),body)
  .then(checkRequest);
}

export const resetPasswordRequest = (token,password)=>{
  const body = {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-type':'application/json'
    },
    body: JSON.stringify({password})
  };
  return fetch(createUrl('/auth/reset/'+token),body)
  .then(checkRequest);
}