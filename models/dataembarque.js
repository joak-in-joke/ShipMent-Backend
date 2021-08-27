"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DataEmbarque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DataEmbarque.belongsTo(models.Embarque, {
        foreignKey: "id_embarque",
        onDelete: "CASCADE",
      });
      DataEmbarque.hasOne(models.LineaDeTiempos, {
        foreignKey: "id_embarque",
      });
      DataEmbarque.hasOne(models.Finanza, {
        foreignKey: "id_embarque",
      });
      DataEmbarque.hasMany(models.ValorData, {
        foreignKey: "id_data",
      });
      DataEmbarque.hasMany(models.TransbordoData, {
        foreignKey: "id_data",
      });
      DataEmbarque.belongsTo(models.Puerto, {
        foreignKey: "id_puerto_embarque",
      });
      DataEmbarque.hasOne(models.DataLCL, {
        foreignKey: "id_data",
      });
      DataEmbarque.hasOne(models.DataFCL, {
        foreignKey: "id_data",
      });
      DataEmbarque.belongsTo(models.OperadorLogistico, {
        foreignKey: "id_operador",
      });
      DataEmbarque.belongsTo(models.AgenciaAduana, {
        foreignKey: "id_agencia",
      });
      DataEmbarque.hasOne(models.Documentos, {
        foreignKey: "id_embarque",
      });
      DataEmbarque.belongsTo(models.ProveedorCliente, {
        foreignKey: "id_exportador",
      });
      DataEmbarque.belongsTo(models.ProveedorCliente, {
        foreignKey: "id_importador",
      });
    }
  }
  DataEmbarque.init(
    {
      id_embarque: DataTypes.INTEGER,
      id_puerto_embarque: DataTypes.INTEGER,
      id_exportador: DataTypes.INTEGER,
      id_importador: DataTypes.INTEGER,
      id_operador: DataTypes.INTEGER,
      id_agencia: DataTypes.INTEGER,
      tipo_operacion: DataTypes.STRING,
      incoterm: DataTypes.STRING,
      tipo_documento: DataTypes.STRING,
      documento: DataTypes.STRING,
      motonave: DataTypes.STRING,
      viaje: DataTypes.STRING,
      naviera: DataTypes.STRING,
      transbordo: DataTypes.BOOLEAN,
      reserva: DataTypes.STRING,
      valor_cif: DataTypes.NUMERIC,
    },
    {
      sequelize,
      modelName: "DataEmbarque",
      paranoid: true,
    }
  );
  return DataEmbarque;
};
