const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN, {
    expiresIn: "7200s",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN, {
    expiresIn: "18000s",
  });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const authCookie = req.cookies.auth;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err)
        return res.status(403).json({ message: "not accessible for you!" });
      req.user = user;
      next();
    });
  } else if (authCookie) {
    jwt.verify(authCookie, process.env.REFRESH_TOKEN, (err, user) => {
      if (err)
        return res.status(403).json({ message: "not accessible for you!" });
      req.user = user;
      next();
    });
  } else return res.status(401).json({ message: "not accessible for you." });
};

module.exports = { generateAccessToken, generateRefreshToken, verifyToken };
