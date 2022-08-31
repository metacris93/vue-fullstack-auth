const messages = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3'];

const getMessage = (req, res) => {
    res.send(messages[req.params.id]);
};

const getAll = (req, res) => {
    res.send(messages);
};

const createNewMessage = (req, res) => {
    let msg = req.body;
    messages.push(msg.message);
    res.json(msg);
};

module.exports = {
    getAll,
    getMessage,
    createNewMessage
}
