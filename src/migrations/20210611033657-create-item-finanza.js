'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ItemFinanzas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_finanza: {
        type: Sequelize.INTEGER
      },
      id_proveedor: {
        type: Sequelize.INTEGER
      },
      concepto: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.NUMERIC
      },
      factura: {
        type: Sequelize.STRING
      },
      fac_tipo: {
        type: Sequelize.STRING
      },
      fac_fecha: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ItemFinanzas');
  }
};