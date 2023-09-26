'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Armada,{foreignKey: "armada_id"})
      this.belongsTo(models.Driver,{foreignKey: "driver_id"})
      this.hasMany(models.Ticket, {foreignKey: "schedule_id"})
    }
  }
  Schedule.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      time: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'time is required' },
          notNull: { msg: 'time is required' },
        },
      },
      origin: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'origin is required' },
          notNull: { msg: 'origin is required' },
        },
      },
      destination: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'destination is required' },
          notNull: { msg: 'destination is required' },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'price is required' },
          notNull: { msg: 'price is required' },
        },
      },
      estimation: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'estimation is required' },
          notNull: { msg: 'estimation is required' },
        },
      },
      armada_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'armada_id is required' },
          notNull: { msg: 'armada_id is required' },
        },
      },
      driver_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'driver_id is required' },
          notNull: { msg: 'driver_id is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Schedule',
    }
  );
  return Schedule;
};
