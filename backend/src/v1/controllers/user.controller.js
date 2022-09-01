const jwt = require('jsonwebtoken');
const users = [];

const login = (req, res) => {
    console.log(users);
    const loginData = req.body;
    const userId = users.findIndex(user => user.username === loginData.username);
    if (userId === -1)
        return res.status(401, {message: 'name or password invalid'});
    if (users[userId].password !== loginData.password)
        return res.status(401, {message: 'name or password invalid'});
    let token = jwt.sign(userId, '123');
    res.json(token);
};

const register = (req, res) => {
    const user = req.body;
    const newIndex = users.push(req.body);
    user.id = newIndex - 1;
    let token = jwt.sign(user.id, '123');
    res.json(token);
};

const isUserExist = (id) => {
    console.log(users);
    return !!users.at(id);
}

const getUserById = (id) => {
    return users.at(id);
}

module.exports = {
    login,
    register,
    isUserExist,
    getUserById
}
