'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Documentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_documentos: {
        type: Sequelize.INTEGER
      },
      id_tipo: {
        type: Sequelize.INTEGER
      },
      archivo: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.NUMERIC
      },
      direccion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Documentos');
  }
};