const { isUserExist } = require("../v1/controllers/user.controller");

const checkLoginOrRegisterRequest = (req) => {
  const regexLogin = /\/api\/v\d\/login/gi;
  const regexRegister = /\/api\/v\d\/register/gi;
  const login = req.path.match(regexLogin);
  const register = req.path.match(regexRegister);
  return !!login || !!register;
};

module.exports = function checkAuthorization(req, res, next) {
  const isLoginOrRegister = checkLoginOrRegisterRequest(req);
  if (isLoginOrRegister) next();
  else {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        error: "No Authorized",
      });
    }
    const exist = isUserExist(token);
    if (!exist) {
      return res.status(403).json({
        error: "No Authorized",
      });
    }
    next();
  }
};
