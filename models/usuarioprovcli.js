"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsuarioProvCli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UsuarioProvCli.belongsTo(models.Usuarios, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });
      UsuarioProvCli.belongsTo(models.ProveedorCliente, {
        foreignKey: "id_proveedor_cliente",
        onDelete: "CASCADE",
      });
    }
  }
  UsuarioProvCli.init(
    {
      id_usuario: DataTypes.INTEGER,
      id_proveedor_cliente: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UsuarioProvCli",
      paranoid: true,
    }
  );
  return UsuarioProvCli;
};
