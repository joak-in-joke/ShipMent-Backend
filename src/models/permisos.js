import sequelize from "sequelize";
import { database } from "../database/database";

const permisos = database.define(
  "permisos",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    id_usuario: {
      type: sequelize.INTEGER,
    },
    perm_finanza: {
      type: sequelize.BOOLEAN,
    },
    perm_misiones: {
      type: sequelize.BOOLEAN,
    },
    perm_superuser: {
      type: sequelize.BOOLEAN,
    },
    perm_admin: {
      type: sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false,
    tableName: "permisos",
  }
);

export default permisos;
