import { createUrl, checkRequest, fetchWithAuth } from '../utils/api';
import { getToken } from '../utils/auth';

export const getMembers = () => {
  return fetchWithAuth(createUrl('/members'))
  .then(checkRequest);
}

export const createMember = (data) => {
  const body = {
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + getToken().token
    },
    body: JSON.stringify(data)
  };
  return fetch(createUrl('/members'), body)
  .then(checkRequest);
}
