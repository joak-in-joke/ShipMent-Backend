"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Embarque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Embarque.hasOne(models.DataEmbarque, {
        foreignKey: "id_embarque",
      });
    }
  }
  Embarque.init(
    {
      n_operacion: DataTypes.INTEGER,
      estado: DataTypes.NUMERIC,
      referencia: DataTypes.STRING,
      etd: DataTypes.DATE,
      eta: DataTypes.DATE,
      media_transporte: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Embarque",
    }
  );
  return Embarque;
};
