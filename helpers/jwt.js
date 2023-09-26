const jwt = require('jsonwebtoken');

exports.signToken = (payload) => {
  return jwt.sign(payload, process.env.SECREAT_KEY);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.SECREAT_KEY);
};
