const messages = [];//['Mensaje 1', 'Mensaje 2', 'Mensaje 3'];

const getMessage = (req, res) => {
    res.send(messages[req.params.id]);
};

const getAll = (req, res) => {
    res.send(messages);
};

const createNewMessage = (req, res) => {
    const user = req.header('Authorization');
    if (!user)
    {
        res.status(401);
        res.send({
            'succeeded': false,
            'message': 'Unauthorized'
        });
        return;
    }
    console.log(user);
    const msg = {user, text: req.body.message};
    messages.push(msg);
    res.json(msg);
};

module.exports = {
    getAll,
    getMessage,
    createNewMessage
}
