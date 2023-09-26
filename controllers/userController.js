const { comparingPassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User, Driver } = require('../models');
const googleAuth = require("../helpers/googleAuth.js");

class UserController {
  static async register(req, res, next) {
    try {
      const { id, username, email, age } = await User.create({ ...req.body });
      res.status(201).json({ id, username, email, age });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { password, email } = req.body;
      if (!password) {
        return res.status(400).json({ message: 'password is required' });
      }
      if (!email) {
        return res.status(400).json({ message: 'email is required' });
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'invalid email or password' });
      } else {
        const decoded = comparingPassword(password, user.password);
        if (!decoded) {
          return res.status(401).json({ message: 'invalid email or password' });
        } else {
          const payload = { id: user.id };
          const access_token = signToken(payload);
          res.status(200).json({ access_token });
        }
      }
    } catch (error) {
      next(error);
    }
  }
  static async adminRegister(req, res, next) {
    try {
      const { id, username, email, age } = await User.create({
        ...req.body,
        role: 'admin',
      });
      res.status(201).json({ id, username, email, age });
    } catch (error) {
      next(error);
    }
  }
  static async driverRegister(req, res, next) {
    try {
      const { userId } = req.params;
      const findDriver = await Driver.findOne({ where: { user_id: userId } });
      if (findDriver) {
        let message = 'all ready register driver';
        return res.status(200).json({ message });
      }
      const { id, user_id, license } = await Driver.create({
        ...req.body,
        user_id: userId,
      });
      res.status(201).json({ id, user_id, license });
    } catch (error) {
      next(error);
    }
  }
  static async googleLogin(req, res, next){
    try {
      if (!req.headers.credential) {
        throw { name: "credentialTokenError" };
      }
      const generatePass= new Date()
      
      const {name, email} = await googleAuth(req.headers.credential);
      // console.log(payload);
      const [customer, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: `${generatePass.getTime()}` ,
          username: name,
          role: "user"
        },
      });
      const { id } = customer;
      const decoded = signToken({ id });
      res.status(200).json({
        access_token: decoded,
        email,
      });
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

module.exports = UserController;
