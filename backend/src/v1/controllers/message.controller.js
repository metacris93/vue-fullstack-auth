const jwt = require('jsonwebtoken');
const { getUserById } = require("./user.controller");
const messages = [];//['Mensaje 1', 'Mensaje 2', 'Mensaje 3'];

const getMessage = (req, res) => {
    res.send(messages[req.params.id]);
};

const getAll = (req, res) => {
    const token = req.header('Authorization');
    const userId = jwt.decode(token, '123');
    console.log('token ' + token);
    console.log(messages);
    console.log(userId);
    const _messages = messages.filter(({user}) => user === token);
    res.send(_messages);
};

const createNewMessage = (req, res) => {
    const user = req.header('Authorization');
    const msg = {user, text: req.body.message};
    messages.push(msg);
    res.json(msg);
};

module.exports = {
    getAll,
    getMessage,
    createNewMessage
}
