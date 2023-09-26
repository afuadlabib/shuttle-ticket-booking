'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{foreignKey: "user_id"})
      this.hasMany(models.Schedule,{foreignKey: "driver_id"})
    }
  }
  Driver.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'user_id is required' },
          notNull: { msg: 'user_id is required' },
        },
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'contact is required' },
          notNull: { msg: 'contact is required' },
        },
      },
      license: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'license is required' },
          notNull: { msg: 'license is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Driver',
    }
  );
  return Driver;
};
