/**
 * @param {String} email
 * @return {boolean} is email valid or not
 */
export const isValidEmail = (email)=> {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export const isValidPassword = (password) => {
    return password.length >= 6; // forgive me
}