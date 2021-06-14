"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Embarque", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      n_operacion: {
        type: Sequelize.INTEGER,
      },
      estado: {
        type: Sequelize.NUMERIC,
      },
      referencia: {
        type: Sequelize.STRING,
      },
      etd: {
        type: Sequelize.DATE,
      },
      eta: {
        type: Sequelize.DATE,
      },
      media_transporte: {
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
    await queryInterface.dropTable("Embarque");
  },
};
