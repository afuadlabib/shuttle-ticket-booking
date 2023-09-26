const UserController = require('../controllers/userController');
const router = require('express').Router();
const { authorization,authorizationAdmin } = require('../helpers/auth');
router
  .post('/register', UserController.register)
  .post('/login', UserController.login)
  .post('/google-login', UserController.googleLogin)
  .post('/register/admin', UserController.adminRegister)
  .use(authorization)
  .post('/register/drivers/:userId', authorizationAdmin, UserController.driverRegister);

module.exports = router;
