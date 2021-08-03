"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Documento", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_documentos: {
        type: Sequelize.INTEGER,
        references: {
          model: "Documentos",
          key: "id",
          as: "id_documentos",
        },
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        references: {
          model: "DocumentoTipos",
          key: "id",
          as: "id_tipo",
        },
      },
      archivo: {
        type: Sequelize.STRING,
      },
      version: {
        type: Sequelize.NUMERIC,
      },
      direccion: {
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
    await queryInterface.dropTable("Documento");
  },
};
