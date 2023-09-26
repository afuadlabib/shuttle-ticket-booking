'use strict';
const { Model } = require('sequelize');
const { hashingPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Driver, {foreignKey: "user_id"})
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'username is required' },
          notNull: { msg: 'username is required' },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          msg: 'email must be unique',
        },
        validate: {
          notEmpty: { msg: 'email is required' },
          notNull: { msg: 'email is required' },
          isEmail: { msg: 'invalid email format' },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'password is required' },
          notNull: { msg: 'password is required' },
          len: {
            args: [5],
            msg: 'password min 5 character',
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user"
      },
      age: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  User.beforeCreate((user) => {
    user.password = hashingPassword(user.password);
  });
  return User;
};
