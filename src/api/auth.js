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
