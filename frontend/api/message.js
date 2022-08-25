import API from "./index";

export const getMessages = async () => {
    return await API.get("messages")
        .then(res => res.data)
        .catch(error => error);
};