'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contacto.init({
    id_proveedor_cliente: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    cargo: DataTypes.STRING,
    telefono: DataTypes.NUMERIC,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contacto',
  });
  return Contacto;
};