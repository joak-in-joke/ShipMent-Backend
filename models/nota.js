"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nota.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });
    }
  }
  Nota.init(
    {
      id_usuario: DataTypes.INTEGER,
      contenido: DataTypes.TEXT,
      creado: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Nota",
      paranoid: true,
    }
  );
  return Nota;
};
