"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CuentaBanco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CuentaBanco.belongsTo(models.ProveedorCliente, {
        foreignKey: "id_proveedor_cliente",
      });
    }
  }
  CuentaBanco.init(
    {
      id_proveedor_cliente: DataTypes.INTEGER,
      n_cuenta: DataTypes.NUMERIC,
      email: DataTypes.STRING,
      rut: DataTypes.STRING,
      nombre_empresa: DataTypes.STRING,
      banco: DataTypes.STRING,
      tipo_de_cuenta: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CuentaBanco",
    }
  );
  return CuentaBanco;
};
