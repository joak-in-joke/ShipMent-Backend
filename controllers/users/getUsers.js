const { response } = require("express");
const sequelize = require("sequelize");
const dataUser = require("../../models/datausuario");
const user = require("../../models/usuario");

const getUsers = async (req, res = response) => {
  try {
    const userResponse = await user.findAll({
      attributes: ["id", "tipo"],
      order: [["id", "DESC"]],
    });

    const userDataResponse = await dataUser.findAll({
      attributes: [
        "id_usuario",
        "nombre",
        "apellido",
        "rut",
        "email",
        "estado",
        "cargo",
        "ciudad",
        "telefono",
      ],
      order: [["id", "DESC"]],
    });

    const payload = {
      tipo: userResponse.tipo,
      nombre: userDataResponse.nombre,
      apellido: userDataResponse.apellido,
      rut: userDataResponse.rut,
      mail: userDataResponse.mail,
      estado: userDataResponse.estado,
      cargo: userDataResponse.cargo,
      cargo: userDataResponse.cargo,
      telefono: userDataResponse.telefono,
    };
    res.json({ resultado: true, users: { allUsers, alldatauser } });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getUsers;
