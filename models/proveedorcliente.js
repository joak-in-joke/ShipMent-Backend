"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProveedorCliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProveedorCliente.hasMany(models.DataEmbarques, {
        foreignKey: "id_exportador",
      });
      ProveedorCliente.hasMany(models.DataEmbarques, {
        foreignKey: "id_importador",
      });
      ProveedorCliente.hasOne(models.CuentaBancos, {
        foreignKey: "id_proveedor_cliente",
      });
      ProveedorCliente.hasOne(models.UsuarioProvClis, {
        foreignKey: "id_proveedor_cliente",
      });
      ProveedorCliente.hasOne(models.Contactos, {
        foreignKey: "id_proveedor_cliente",
      });
      ProveedorCliente.hasMany(models.ItemFinanza, {
        foreignKey: "id_proveedor",
      });
    }
  }
  ProveedorCliente.init(
    {
      pais: DataTypes.STRING,
      direccion: DataTypes.STRING,
      nombre: DataTypes.STRING,
      rut: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProveedorCliente",
      paranoid: true,
    }
  );
  return ProveedorCliente;
};
