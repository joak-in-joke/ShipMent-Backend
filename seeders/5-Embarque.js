module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Embarques",
      [
        {
          n_operacion: "EMB.3432021",
          estado: 1,
          referencia: "EXP_FCL_CL_BR",
          etd: new Date(),
          eta: new Date(),
          media_transporte: "FCL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Embarques", null, {});
  },
};
