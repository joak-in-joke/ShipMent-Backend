"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contacto", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_proveedor_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProveedorCliente",
          key: "id",
          as: "id_proveedor_cliente",
        },
      },
      nombre: {
        type: Sequelize.STRING,
      },
      cargo: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.NUMERIC,
      },
      email: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Contacto");
  },
};
