'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataFCL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataFCL.init({
    id_data: DataTypes.INTEGER,
    id_puerto_destino: DataTypes.INTEGER,
    deposito_contenedores: DataTypes.STRING,
    cont_tipo: DataTypes.STRING,
    sello: DataTypes.STRING,
    lugar_destino: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataFCL',
  });
  return DataFCL;
};