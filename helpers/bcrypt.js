const bcrypt = require('bcrypt');
const salt = 10;
exports.hashingPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

exports.comparingPassword = (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
};
