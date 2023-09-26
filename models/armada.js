'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Armada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Seat,{foreignKey: "seat_id"})
      this.hasMany(models.Schedule,{foreignKey: "armada_id"})
    }
  }
  Armada.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'name is required' },
          notNull: { msg: 'name is required' },
        },
      },
      plate_number: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'plate_number is required' },
          notNull: { msg: 'plate_number is required' },
        },
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'color is required' },
          notNull: { msg: 'color is required' },
        },
      },
      seat_id: {
        allowNull: false,
        type: DataTypes.UUID,
        validate: {
          notEmpty: 'seat_id is required',
          notNull: 'seat_id is required',
        },
      },
    },
    {
      sequelize,
      modelName: 'Armada',
    }
  );
  return Armada;
};
