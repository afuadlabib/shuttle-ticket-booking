const { verifyToken } = require('./jwt');
const { User } = require('../models');

exports.authorization = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { name: 'JsonWebTokenError' };
    }
    const [bearer, token] = authorization.split(' ');
    const { id } = verifyToken(token);
    const user = await User.findByPk(id);
    if(!user){
      throw {name: "un_authorize"}
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
exports.authorizationAdmin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { name: 'JsonWebTokenError' };
    }
    const [bearer, token] = authorization.split(' ');
    const { id } = verifyToken(token);
    const user = await User.findByPk(id);
    if(user.role !== "admin"){
      throw {name: "forbidden"}
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
