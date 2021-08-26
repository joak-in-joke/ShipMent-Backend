"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ValorData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ValorData.belongsTo(models.DataEmbarque, {
        foreignKey: "id_data",
        onDelete: "CASCADE",
      });
    }
  }
  ValorData.init(
    {
      id_data: DataTypes.INTEGER,
      nombre_mercancia: DataTypes.STRING,
      valor_usd: DataTypes.NUMERIC,
      flete_usd: DataTypes.NUMERIC,
      seguro_usd: DataTypes.NUMERIC,
    },
    {
      sequelize,
      modelName: "ValorData",
      paranoid: true,
    }
  );
  return ValorData;
};
