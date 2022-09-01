import API from "./index";

export const register = async (data) => {
    return await API.post('register', data)
        .then(res => res.data);
};

export const login = async (data) => {
    return await API.post('login', data)
        .then(res => res.data);
};