'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataLCL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataLCL.init({
    id_data: DataTypes.INTEGER,
    id_puerto_destino: DataTypes.INTEGER,
    contenedor: DataTypes.STRING,
    cant_bultos: DataTypes.INTEGER,
    peso: DataTypes.NUMERIC,
    volumen: DataTypes.NUMERIC,
    lugar_destino: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataLCL',
  });
  return DataLCL;
};