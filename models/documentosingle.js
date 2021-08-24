"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DocumentoSingle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DocumentoSingle.belongsTo(models.Documentos, {
        foreignKey: "id_documentos",
      });
      DocumentoSingle.belongsTo(models.DocumentoTipos, {
        foreignKey: "id_tipo",
      });
    }
  }
  DocumentoSingle.init(
    {
      id_documentos: DataTypes.INTEGER,
      id_tipo: DataTypes.INTEGER,
      archivo: DataTypes.STRING,
      version: DataTypes.NUMERIC,
      direccion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DocumentoSingle",
    }
  );
  return DocumentoSingle;
};
