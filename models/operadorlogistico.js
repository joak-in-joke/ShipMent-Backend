"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OperadorLogistico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OperadorLogistico.hasMany(models.DataEmbarques, {
        foreignKey: "id_operador",
      });
    }
  }
  OperadorLogistico.init(
    {
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OperadorLogistico",
      paranoid: true,
    }
  );
  return OperadorLogistico;
};
