const { usuarios } = require("./models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export const findAllUsers = async () => {
  const usuarios = await usuarios.findAll({});
  console.log(
    "All users with their associated tasks:",
    JSON.stringify(usuarios, null, 4)
  );
};

run();
