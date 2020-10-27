const key = '@uptome-token';
const user = '@uptome-user';

export const logout = () =>{
    localStorage.removeItem(key);
    localStorage.removeItem(user);
}

export const setUser = (userObj) => {
    localStorage.setItem(user, JSON.stringify(userObj));
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem(user));
}

export const setToken = (token) => {
    localStorage.setItem(key, JSON.stringify(token));
}

export const  getToken = () =>{
    return localStorage.getItem(key);
}
