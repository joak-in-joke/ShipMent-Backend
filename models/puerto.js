"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Puerto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Puerto.hasMany(models.TransbordoData, {
        foreignKey: "id_puerto_transbordo",
      });
      Puerto.hasMany(models.DataLCL, {
        foreignKey: "id_puerto_destino",
      });
      Puerto.hasMany(models.DataFCL, {
        foreignKey: "id_puerto_destino",
      });
      Puerto.hasMany(models.DataEmbarque, {
        foreignKey: "id_puerto_embarque",
      });
    }
  }
  Puerto.init(
    {
      nombre: DataTypes.STRING,
      tipo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Puerto",
      paranoid: true,
    }
  );
  return Puerto;
};
