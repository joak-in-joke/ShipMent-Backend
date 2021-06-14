module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Finanza",
      [
        {
          id_embarque: 1,
          estado: "Activo",
          total: 12312344,
          descripcion: "Descripcion de Finanzas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Finanza", null, {});
  },
};
