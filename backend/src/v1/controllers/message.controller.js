const messages = [];

const getAll = (req, res) => {
    res.send(messages);
};

const createNewMessage = (req, res) => {
    let msg = req.body;
    console.log(msg);
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
};

module.exports = {
    getAll,
    createNewMessage
}
