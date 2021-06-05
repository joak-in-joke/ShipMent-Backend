import sequelize from "sequelize";
import { database } from "../database/database";

const transbordoData = database.define(
  "transbordoData",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    id_data: {
      type: sequelize.INTEGER,
    },
    puerto_transb: {
      type: sequelize.TEXT,
    },
    naver_transb: {
      type: sequelize.TEXT,
    },
    fecha: {
      type: sequelize.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "transbordodata",
  }
);

export default transbordoData;
