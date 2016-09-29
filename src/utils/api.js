export const createUrl = (path) => {
  return `http://localhost:3000${path}`;
}

export const checkRequest = (response) => {
  return response.json().then(res => {
    if(response.status >= 200 && response.status < 300) {
      return res;
    } else {
      throw new Error(res.error);
    }
  });
}
