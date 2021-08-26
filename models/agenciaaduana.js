"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AgenciaAduana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AgenciaAduana.hasMany(models.DataEmbarque, {
        foreignKey: "id_agencia",
      });
    }
  }
  AgenciaAduana.init(
    {
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AgenciaAduana",
      paranoid: true,
    }
  );
  return AgenciaAduana;
};
