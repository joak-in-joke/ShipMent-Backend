import sequelize from "sequelize";
import user from "../models/usuario";
import datauser from "../models/datausuario";

export async function createUser(req, res) {
  const {
    tipo,
    nombre,
    apellido,
    rut,
    dv,
    mail,
    estado,
    cargo,
    asesor,
    telefono,
    pass,
  } = req.body;
  try {
    const newUser = await user.create(
      {
        tipo,
      },
      {
        fields: ["tipo"],
        attributes: ["id"],
      }
    );
    console.log(newUser);
    if (newUser) {
      const newDataUser = await datauser.create(
        {
          id_usuario: newUser.id,
          nombre,
          apellido,
          rut,
          dv,
          mail,
          estado,
          cargo,
          asesor,
          telefono,
          pass,
        },
        {
          fields: [
            "id_usuario",
            "nombre",
            "apellido",
            "rut",
            "dv",
            "mail",
            "estado",
            "cargo",
            "asesor",
            "telefono",
            "pass",
          ],
        }
      );
      return res.json({
        respuesta: true,
        message: "User created",
      });
    } else {
      console.log(error);
      res.status(500).json({
        respuesta: false,
        message: "Oops algo salio mal/:",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      respuesta: false,
      message: "Oops algo salio mal/:",
    });
  }
}

export async function getAllUsers(req, res) {
  const allUsers = await user.findAll({
    attributes: ["id", "tipo"],
    order: [["id", "DESC"]],
  });
  const alldatauser = await datauser.findAll({
    attributes: [
      "id_usuario",
      "nombre",
      "apellido",
      "rut",
      "dv",
      "mail",
      "estado",
      "cargo",
      "asesor",
      "telefono",
      "pass",
    ],
    order: [["id", "DESC"]],
  });

  const payload = {
    tipo: user.tipo,
    nombre: user.nombre,
    apellido: user.apellido,
    rut: user.rut,
    dv: user.tidvpo,
    mail: user.mail,
    estado: user.estado,
    cargo: user.cargo,
    asesor: user.asesor,
    telefono: user.telefono,
    pass: user.pass,
  };
  res.json({ respuesta: true, message: allUsers, alldatauser });
}

export async function getUser(req, res) {
  const { id } = req.params;
  try {
    const finduser = await user.findOne({
      where: {
        id,
      },
      attributes: ["id", "tipo"],
    });
    if (finduser) {
      const finddatauser = await datauser.findOne({
        where: {
          id_usuario: finduser.id,
        },
        attributes: [
          "id",
          "nombre",
          "apellido",
          "rut",
          "dv",
          "mail",
          "estado",
          "cargo",
          "asesor",
          "telefono",
          "pass",
        ],
      });

      const payload = {
        id: finduser.id,
        tipo: finduser.tipo,
        nombre: finddatauser.nombre,
        apellido: finddatauser.apellido,
        rut: finddatauser.rut,
        dv: finddatauser.tidvpo,
        mail: finddatauser.mail,
        estado: finddatauser.estado,
        cargo: finddatauser.cargo,
        asesor: finddatauser.asesor,
        telefono: finddatauser.telefono,
        pass: finddatauser.pass,
      };

      res.json({ respuesta: true, message: payload });
    } else {
      res.json({
        respuesta: false,
        message: "No se pudo encontrar el usuario",
      });
    }
  } catch (error) {
    console.log({
      respuesta: false,
      message:
        "No se pudo obtener el usuario, intente denuevo, si el problema persiste contacte con soporte",
    });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    //primero bsucamos si tiene, si hay eliminamos los datos asociados
    const finduser = await user.findOne({
      where: {
        id,
      },
    });
    if (finduser) {
      //primero eliminamos la cuenta asociada a user
      const deleteCuenta = await datauser.destroy({
        where: {
          id_usuario: id,
        },
      });
      //segundo eliminamos el user
      const deleteuser = await user.destroy({
        where: {
          id,
        },
      });

      res.json({
        respuesta: true,
        message: "user eliminado correctamente",
      });
    } else {
      const deleteuser = await user.destroy({
        where: {
          id,
        },
      });
      res.json({
        respuesta: true,
        message: "user eliminado correctamente",
      });
    }
  } catch (error) {
    console.log({ respuesta: false, error });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const {
    tipo,
    nombre,
    apellido,
    rut,
    dv,
    mail,
    estado,
    cargo,
    asesor,
    telefono,
    pass,
  } = req.body;

  const updateUser = await user.update(
    {
      tipo,
    },
    {
      where: { id },
    }
  );
  const UpdateCuenta = await datauser.update(
    {
      tipo,
      nombre,
      apellido,
      rut,
      dv,
      mail,
      estado,
      cargo,
      asesor,
      telefono,
      pass,
    },
    {
      where: { id_usuario: id },
    }
  );

  res.json({
    respuesta: true,
    message: "User update Succesfully! (: ",
  });
}
