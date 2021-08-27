"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Permisos, {
        foreignKey: "id_usuario",
      });
      Usuario.hasOne(models.DataUsuario, {
        foreignKey: "id_usuario",
      });
      Usuario.hasOne(models.UsuarioProvClis, {
        foreignKey: "id_usuario",
      });
      Usuario.hasMany(models.Nota, {
        foreignKey: "id_usuario",
      });
      Usuario.hasMany(models.ComentariosLTiempos, {
        foreignKey: "id_usuario",
      });
    }
  }
  Usuario.init(
    {
      id_permisos: DataTypes.INTEGER,
      tipo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Usuario",
      paranoid: true,
    }
  );
  return Usuario;
};
