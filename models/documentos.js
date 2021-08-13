"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Documentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Documentos.belongsTo(models.DataEmbarque, {
        foreignKey: "id_embarque",
      });
      Documentos.hasMany(models.Documento, {
        foreignKey: "id_documentos",
      });
    }
  }
  Documentos.init(
    {
      id_embarque: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Documentos",
    }
  );
  return Documentos;
};
