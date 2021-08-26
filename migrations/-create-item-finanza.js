"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ItemFinanza", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_finanza: {
        type: Sequelize.INTEGER,
        references: {
          model: "Finanza",
          key: "id",
          as: "id_finanza",
        },
      },
      id_proveedor: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProveedorCliente",
          key: "id",
          as: "id_proveedor",
        },
      },
      concepto: {
        type: Sequelize.STRING,
      },
      monto: {
        type: Sequelize.NUMERIC,
      },
      factura: {
        type: Sequelize.STRING,
      },
      fac_tipo: {
        type: Sequelize.STRING,
      },
      fac_fecha: {
        type: Sequelize.DATE,
      },
      estado: {
        type: Sequelize.STRING,
      },
      tipo: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ItemFinanza");
  },
};
