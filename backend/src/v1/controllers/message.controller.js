const getAll = (req, res) => {
    const messages = ["hello", "hi", "its working"];
    return res.send(messages);
};

module.exports = {
    getAll
}
