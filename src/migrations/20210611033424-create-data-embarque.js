'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DataEmbarques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_embarque: {
        type: Sequelize.INTEGER
      },
      id_puerto_embarque: {
        type: Sequelize.INTEGER
      },
      id_exportador: {
        type: Sequelize.INTEGER
      },
      id_importador: {
        type: Sequelize.INTEGER
      },
      id_operador: {
        type: Sequelize.INTEGER
      },
      id_agencia: {
        type: Sequelize.INTEGER
      },
      tipo_operacion: {
        type: Sequelize.STRING
      },
      incoterm: {
        type: Sequelize.STRING
      },
      tipo_documento: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      motonave: {
        type: Sequelize.STRING
      },
      viaje: {
        type: Sequelize.STRING
      },
      naviera: {
        type: Sequelize.STRING
      },
      transbordo: {
        type: Sequelize.BOOLEAN
      },
      reserva: {
        type: Sequelize.STRING
      },
      valor_cif: {
        type: Sequelize.NUMERIC
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
    await queryInterface.dropTable('DataEmbarques');
  }
};