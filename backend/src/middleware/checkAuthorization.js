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
    console.log(1);
    const token = req.header("Authorization");
    console.log(token);
    if (!token) {
        console.log(1.1);
      return res.status(401).json({
        error: "No Authorized",
      });
    }
    console.log(2);
    const exist = isUserExist(token);
    if (!exist) {
        console.log(2.1);
      return res.status(403).json({
        error: "No Authorized",
      });
    }
    next();
  }
};
