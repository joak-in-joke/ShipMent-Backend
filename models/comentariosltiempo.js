"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ComentariosLTiempo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ComentariosLTiempo.belongsTo(models.Usuarios, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });
      ComentariosLTiempo.belongsTo(models.LineaDeTiempos, {
        foreignKey: "id_linea_tiempo",
      });
    }
  }
  ComentariosLTiempo.init(
    {
      id_linea_tiempo: DataTypes.INTEGER,
      id_usuario: DataTypes.INTEGER,
      contenido: DataTypes.TEXT,
      creado: DataTypes.DATE,
      estado: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      fecha: DataTypes.DATE,
      icono: DataTypes.NUMERIC,
    },
    {
      sequelize,
      modelName: "ComentariosLTiempos",
      //paranoid: true,
    }
  );
  return ComentariosLTiempo;
};
