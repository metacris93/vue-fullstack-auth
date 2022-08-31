import API from "./index";

export const getMessage = async (id) => {
    return await API.get(`message/${id}`)
        .then(res => res.data);
};

export const getMessages = async () => {
    return await API.get("message")
        .then(res => res.data);
};

export const createNewMessage = async (req) => {
    return await API.post("message", req)
        .then(res => res.data);
};
