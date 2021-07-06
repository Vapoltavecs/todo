const jwt = require("jsonwebtoken");
module.exports = AuthMiddleware = (req, res, next) => {
  const decoded = jwt.verify(String(req.headers.id), "vapoltavecs");

  req.user = decoded;
  next();
};
