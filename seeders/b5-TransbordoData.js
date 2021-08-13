module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "TransbordoData",
      [
        {
          id_data: 1,
          id_puerto_transbordo: 1,
          naver_transb: "Naviera del Transbordo",
          fecha_transb: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TransbordoData", null, {});
  },
};
