'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Armada, {foreignKey: "seat_id"})
    }
  }
  Seat.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'name is required' },
          notNull: { msg: 'name is required' },
        },
      },
      column: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'column is required' },
          notNull: { msg: 'column is required' },
        },
      },
      row: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'row is required' },
          notNull: { msg: 'row is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Seat',
    }
  );
  return Seat;
};
