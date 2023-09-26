'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Schedule, {foreignKey: "schedule_id"})
    }
  }
  Ticket.init(
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
      seat: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'seat is required' },
          notNull: { msg: 'seat is required' },
        },
      },
      departure_schedule: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notEmpty: { msg: 'departure_schadule is required' },
          notNull: { msg: 'departure_schadule is required' },
        },
      },
      seat: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'seat is required' },
          notNull: { msg: 'seat is required' },
        },
      },
      id_ticket: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'id_ticket is required' },
          notNull: { msg: 'id_ticket is required' },
        },
      },
      schedule_id: {
        allowNull: false,
        type: DataTypes.UUID,
        validate: {
          notEmpty: { msg: 'schedule_id is required' },
          notNull: { msg: 'schedule_id is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Ticket',
    }
  );
  return Ticket;
};
