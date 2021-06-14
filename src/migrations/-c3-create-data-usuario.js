"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DataUsuario", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Usuario",
          key: "id",
          as: "id_usuario",
        },
      },
      nombre: {
        type: Sequelize.STRING,
      },
      apellido: {
        type: Sequelize.STRING,
      },
      rut: {
        type: Sequelize.NUMERIC,
      },
      dv: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.STRING,
      },
      cargo: {
        type: Sequelize.STRING,
      },
      ciudad: {
        type: Sequelize.STRING,
      },
      asesor: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.STRING,
      },
      pass: {
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
    await queryInterface.dropTable("DataUsuario");
  },
};
