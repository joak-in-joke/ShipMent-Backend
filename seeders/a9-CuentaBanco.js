module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "CuentaBancos",
      [
        {
          id_proveedor_cliente: 1,
          n_cuenta: 213124124,
          email: "CuentaBanco@Cuenta.cl",
          rut: "141246343-k",
          nombre_empresa: "Soprole",
          banco: "Bancho ScotyBank",
          tipo_de_cuenta: "Cuenta vista",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("CuentaBancos", null, {});
  },
};
