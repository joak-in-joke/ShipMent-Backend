'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DataFCLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_data: {
        type: Sequelize.INTEGER
      },
      id_puerto_destino: {
        type: Sequelize.INTEGER
      },
      deposito_contenedores: {
        type: Sequelize.STRING
      },
      cont_tipo: {
        type: Sequelize.STRING
      },
      sello: {
        type: Sequelize.STRING
      },
      lugar_destino: {
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
    await queryInterface.dropTable('DataFCLs');
  }
};