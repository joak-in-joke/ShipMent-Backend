'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Permisos.init({
    id_usuario: DataTypes.INTEGER,
    perm_finanzas: DataTypes.BOOLEAN,
    perm_misiones: DataTypes.BOOLEAN,
    perm_superuser: DataTypes.BOOLEAN,
    perm_admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permisos',
  });
  return Permisos;
};