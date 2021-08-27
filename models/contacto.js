"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contacto.belongsTo(models.ProveedorCliente, {
        foreignKey: "id_proveedor_cliente",
      });
    }
  }
  Contacto.init(
    {
      id_proveedor_cliente: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      cargo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contacto",
      paranoid: true,

    }
  );
  return Contacto;
};
