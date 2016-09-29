import { createUrl, checkRequest } from '../utils/api';

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
    .then(checkRequest);
}
