const users = [];

const login = (req, res) => {
    res.json(req.body);
};

const register = (req, res) => {
    const user = req.body;
    const newIndex = users.push(req.body);
    user.id = newIndex;
    res.json(user);
};

const isUserExist = (id) => {
    return !!users.at(id);
};

module.exports = {
    login,
    register,
    isUserExist
}
