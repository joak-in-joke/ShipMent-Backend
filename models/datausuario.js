"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DataUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DataUsuario.belongsTo(models.Usuarios, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });
    }
  }
  DataUsuario.init(
    {
      id_usuario: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      rut: DataTypes.STRING,
      email: DataTypes.STRING,
      estado: DataTypes.STRING,
      cargo: DataTypes.STRING,
      ciudad: DataTypes.STRING,
      telefono: DataTypes.STRING,
      pass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DataUsuario",
    }
  );
  return DataUsuario;
};
