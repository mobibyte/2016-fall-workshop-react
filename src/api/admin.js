import { createUrl, checkRequest } from '../utils/api';

export const getMembers = () => {
  return fetch(createUrl('/members'))
  .then(checkRequest);
}

export const createMember = (data) => {
  const body = {
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-type':'application/json'
    },
    body: JSON.stringify(data)
  };
  return fetch(createUrl('/members'), body)
  .then(checkRequest);
}
