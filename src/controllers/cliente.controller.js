import sequelize from "sequelize";
import cliente from "../models/cliente";
import contactocliente from "../models/contactocliente";

export async function createClient(req, res) {
  const {
    nombre,
    nacionalidad,

    nombre_contacto,
    cargo,
    telefono,
    email,
  } = req.body;
  try {
    const newCliente = await cliente.create(
      {
        nombre,
        nacionalidad,
      },
      {
        fields: ["nombre", "nacionalidad"],
        attributes: ["id"],
      }
    );
    if (newCliente) {
      const newContactoCliente = await contactocliente.create(
        {
          id_cliente: newCliente.id,
          nombre: nombre_contacto,
          cargo,
          telefono,
          email,
        },
        {
          fields: ["id_cliente", "nombre", "cargo", "telefono", "email"],
        }
      );
    }

    res.json({
      respuesta: true,
      message: "Cliente creado Satisfactoriamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      respuesta: false,
      message: "Oops Somethings goes Wrong /:",
    });
  }
}

export async function getAllClients(req, res) {
  const allClients = await cliente.findAll({
    attributes: ["id", "nombre", "nacionalidad"],
    order: [["id", "DESC"]],
  });
  const allContacts = await contactocliente.findAll({
    attributes: ["nombre", "cargo", "telefono", "email"],
    order: [["id", "DESC"]],
  });

  const payload = {
    nombre: allClients.nombre,
    nacionalidad: allClients.nacionalidad,

    nombre_contacto: allContacts.nombre,
    cargo: allContacts.cargo,
    telefono: allContacts.telefono,
    email: allContacts.email,
  };
  res.json({ respuesta: true, message: allClients, allContacts });
}

export async function getClient(req, res) {
  const { id } = req.params;
  try {
    const Client = await cliente.findOne({
      where: {
        id,
      },
      attributes: ["nombre", "nacionalidad"],
    });
    if (Client) {
      const Contacto = await contactocliente.findOne({
        where: {
          id_cliente: id,
        },
        attributes: ["id", "nombre", "cargo", "telefono", "email"],
      });

      const payload = {
        nombre: Client.nombre,
        nacionalidad: Client.nacionalidad,

        nombre_cliente: Contacto.nombre,
        cargo: Contacto.cargo,
        telefono: Contacto.telefono,
        email: Contacto.email,
      };

      res.json({ respuesta: true, message: payload });
    } else {
      res.json({
        respuesta: false,
        message: "No se ha encontrado ningun cliente",
      });
    }
  } catch (error) {
    console.log({
      respuesta: false,
      message: "No se ha encontrado ningun cliente",
    });
  }
}

export async function deleteClient(req, res) {
  const { id } = req.params;

  try {
    //primero bsucamos si tiene, si hay eliminamos los datos asociados
    const findclient = await cliente.findOne({
      where: {
        id,
      },
    });
    if (findclient) {
      //primero eliminamos la cuenta asociada a cliente
      const deleteCuenta = await contactocliente.destroy({
        where: {
          id_cliente: id,
        },
      });
      //segundo eliminamos el Cliente
      const deleteCliente = await cliente.destroy({
        where: {
          id,
        },
      });

      res.json({
        respuesta: true,
        message: "Cliente eliminado correctamente",
      });
    } else {
      const deleteCliente = await cliente.destroy({
        where: {
          id,
        },
      });
      res.json({
        respuesta: true,
        message: "CLiente eliminado correctamente",
      });
    }
  } catch (error) {
    console.log({ respuesta: false, error });
  }
}

export async function updateClient(req, res) {
  const { id } = req.params;
  const {
    nombre,
    nacionalidad,

    nombre_contacto,
    cargo,
    telefono,
    email,
  } = req.body;

  const updateClient = await cliente.update(
    {
      nombre,
      nacionalidad,
    },
    {
      where: { id },
    }
  );
  const UpdateCuenta = await contactocliente.update(
    {
      nombre_contacto,
      cargo,
      telefono,
      email,
    },
    {
      where: { id_cliente: id },
    }
  );

  res.json({
    respuesta: true,
    message: "Cliente update Succesfully! (: ",
  });
}
