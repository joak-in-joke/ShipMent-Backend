module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ValorData",
      [
        {
          id_data: 1,
          nombre_mercancia: "Manjarates",
          valor_usd: 234,
          flete_usd: 123,
          seguro_usd: 443,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ValorData", null, {});
  },
};
