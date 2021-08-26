module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DataFCLs",
      [
        {
          id_data: 1,
          id_puerto_destino: 1,
          deposito_contenedores: "Deposito de Contenedores",
          cont_tipo: "Tipo de Contenedores",
          sello: "Sellos",
          lugar_destino: "Destino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DataFCLs", null, {});
  },
};
