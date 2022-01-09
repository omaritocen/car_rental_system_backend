const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Car = require('./car');

const CarStatus = sequelize.define(
  'CarStatus',
  {
    // Model attributes are defined here
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'car_status',
  }
);

CarStatus.belongsTo(Car, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

Car.hasOne(CarStatus, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

module.exports = CarStatus;
