import sequelize from "sequelize";
import { database } from "../database/database";

const finclientes = database.define(
  "finclientes",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    id_cliente: {
      type: sequelize.INTEGER,
    },
    id_finanza: {
      type: sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "finclientes",
  }
);

export default finclientes;
