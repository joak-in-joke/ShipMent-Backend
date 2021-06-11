'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataEmbarque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataEmbarque.init({
    id_embarque: DataTypes.INTEGER,
    id_puerto_embarque: DataTypes.INTEGER,
    id_exportador: DataTypes.INTEGER,
    id_importador: DataTypes.INTEGER,
    id_operador: DataTypes.INTEGER,
    id_agencia: DataTypes.INTEGER,
    tipo_operacion: DataTypes.STRING,
    incoterm: DataTypes.STRING,
    tipo_documento: DataTypes.STRING,
    documento: DataTypes.STRING,
    motonave: DataTypes.STRING,
    viaje: DataTypes.STRING,
    naviera: DataTypes.STRING,
    transbordo: DataTypes.BOOLEAN,
    reserva: DataTypes.STRING,
    valor_cif: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'DataEmbarque',
  });
  return DataEmbarque;
};