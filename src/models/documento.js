"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Documento.belongsTo(models.Documentos, {
        foreignKey: "id_documentos",
      });
      Documento.belongsTo(models.DocumentoTipos, {
        foreignKey: "id_tipo",
      });
    }
  }
  Documento.init(
    {
      id_documentos: DataTypes.INTEGER,
      id_tipo: DataTypes.INTEGER,
      archivo: DataTypes.STRING,
      version: DataTypes.NUMERIC,
      direccion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Documento",
    }
  );
  return Documento;
};
