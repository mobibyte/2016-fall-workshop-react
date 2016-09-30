export const createUrl = (path) => {
  return `http://localhost:3000${path}`;
}

export const checkRequest = (response) => {
  const valid = (response.status >= 200 && response.status < 300);
  console.log(valid, response);
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
