module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Embarque",
      [
        {
          n_operacion: 1,
          estado: 1,
          referencia: "EMB.3432021",
          etd: new Date(),
          eta: new Date(),
          media_transporte: "Camion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Embarque", null, {});
  },
};
