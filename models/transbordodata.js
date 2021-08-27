"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransbordoData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransbordoData.belongsTo(models.DataEmbarques, {
        foreignKey: "id_data",
        onDelete: "CASCADE",
      });
      TransbordoData.belongsTo(models.Puerto, {
        foreignKey: "id_puerto_transbordo",
      });
    }
  }
  TransbordoData.init(
    {
      id_data: DataTypes.INTEGER,
      id_puerto_transbordo: DataTypes.INTEGER,
      naver_transb: DataTypes.STRING,
      fecha_transb: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TransbordoData",
      paranoid: true,
    }
  );
  return TransbordoData;
};
