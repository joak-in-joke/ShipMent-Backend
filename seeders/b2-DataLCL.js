module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DataLCLs",
      [
        {
          id_data: 1,
          id_puerto_destino: 1,
          contenedor: "Contenedor",
          cant_bultos: 2,
          peso: 80,
          volumen: 50,
          lugar_destino: "Filadelfia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DataLCLs", null, {});
  },
};
