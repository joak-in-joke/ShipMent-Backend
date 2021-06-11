'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemFinanza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ItemFinanza.init({
    id_finanza: DataTypes.INTEGER,
    id_proveedor: DataTypes.INTEGER,
    concepto: DataTypes.STRING,
    monto: DataTypes.NUMERIC,
    factura: DataTypes.STRING,
    fac_tipo: DataTypes.STRING,
    fac_fecha: DataTypes.DATE,
    estado: DataTypes.STRING,
    tipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemFinanza',
  });
  return ItemFinanza;
};