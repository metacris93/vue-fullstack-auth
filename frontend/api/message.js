import API from "./index";

export const getMessages = async () => {
    return await API.get("message")
        .then(res => res.data)
        .catch(error => error);
};

export const createNewMessage = async (req) => {
    return await API.post("message", req)
        .then(res => res.data)
        .catch(error => error);
};