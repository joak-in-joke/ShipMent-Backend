import sequelize from "sequelize";
import { database } from "../database/database";

const transbordodata = database.define(
  "transbordodata",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    puerto_transb: {
      type: sequelize.TEXT,
    },
    nave: {
      type: sequelize.TEXT,
    },
    fecha: {
      type: sequelize.DATE,
    },

    id_data: {
      type: sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "transbordodata",
  }
);

export default transbordodata;
