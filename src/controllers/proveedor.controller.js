import sequelize, { json } from "sequelize";
import proveedor from "../models/proveedor";
import contactoproveedor from "../models/contacto_proveedor";
import cuenta from "../models/cuentabanproveedor";
import cuentabanproveedor from "../models/cuentabanproveedor";

export async function createProvider(req, res) {
  const {
    nombre,
    pais,
    rut,
    direccion,

    email,
    telefono,

    nombre_proveedor,
    cargo,
    correo,
    fono,

    n_cuenta,
    buzon,
    rutt,
    banco,
    tipo_cuenta,
  } = req.body;
  try {
    const newProveedor = await proveedor.create(
      {
        nombre,
        pais,
        rut,
        direccion,
        email,
        telefono,
      },
      {
        fields: ["nombre", "pais", "rut", "direccion", "email", "telefono"],
      }
    );
    const newContactoProveedor = await contactoproveedor.create(
      {
        id_proveedor: newProveedor.id,
        nombre: nombre_proveedor,
        cargo,
        email: correo,
        telefono: fono,
      },
      {
        fields: ["id_proveedor", "nombre_proveedor", "cargo", "email", "fono"],
      }
    );
    const newCuentaBanco = await cuenta.create(
      {
        id_proveedor: newProveedor.id,
        n_cuenta,
        email: buzon,
        rut: rutt,
        nombre_empresa: nombre,
        banco,
        tipo_cuenta,
      },
      {
        fields: [
          "id_proveedor",
          "n_cuenta",
          "email",
          "rut",
          "nombre_empresa",
          "banco",
          "tipo_cuenta",
        ],
      }
    );
    if (newProveedor) {
      return res.json({
        resultado: true,
        message: "Proveedor created Succesfully (:",
        newProveedor,
      });
    } else {
      console.log(error);
      res.status(500).json({
        resultado: false,
        message: "Oops algo salio mal/:",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      resultado: false,
      message: "Oops Somethings goes Wrong /:",
    });
  }
}

export async function getAllProviders(req, res) {
  const allProveedores = await proveedor.findAll({
    attributes: [
      "id",
      "nombre",
      "pais",
      "rut",
      "direccion",
      "email",
      "telefono",
    ],
    order: [["id", "DESC"]],
  });
  const allContacts = await contactoproveedor.findAll({
    attributes: ["id", "nombre", "cargo", "telefono", "email"],
    order: [["id", "DESC"]],
  });
  const allaccounts = await cuenta.findAll({
    attributes: [
      "id",
      "n_cuenta",
      "email",
      "rut",
      "nombre_empresa",
      "banco",
      "tipo_cuenta",
    ],
    order: [["id", "DESC"]],
  });
  res.json({ allProveedores, allContacts, allaccounts });
}

export async function getProvider(req, res) {
  const { id } = req.params;
  try {
    const Proveedor = await proveedor.findOne({
      where: {
        id,
      },
      attributes: [
        "id",
        "nombre",
        "pais",
        "rut",
        "direccion",
        "email",
        "telefono",
      ],
    });

    if (Proveedor) {
      const Contacto = await contactoproveedor.findOne({
        where: {
          id_proveedor: Proveedor.id,
        },
        attributes: ["id", "nombre", "cargo", "telefono", "email"],
      });
      const Cuenta = await cuenta.findOne({
        where: {
          id_proveedor: Proveedor.id,
        },
        attributes: [
          "id",
          "n_cuenta",
          "email",
          "rut",
          "nombre_empresa",
          "banco",
          "tipo_cuenta",
        ],
      });
    } else {
      res.json({
        resultado: false,
        message: "No se ha encontrado ningun Cliente.",
      });
    }
    const payload = {
      nombre: Proveedor.nombre,
      pais: Proveedor.pais,
      rut: Proveedor.rut,
      direccion: Proveedor.direccion,

      email: Proveedor.email,
      telefono: Proveedor.telefono,

      nombre_proveedor: Contacto.nombre,
      cargo: Contacto.cargo,
      email: Contacto.email,
      fono: Contacto.telefono,

      empresa: Cuenta.nombre_empresa,
      n_cuenta: Cuenta.n_cuenta,
      buzon: Cuenta.email,
      rut_cuenta: Cuenta.rut,
      banco: Cuenta.banco,
      tipo_cuenta: Cuenta.tipo_cuenta,
    };

    res.json({ resultado: true, payload });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProvider(req, res) {
  const { id } = req.params;

  try {
    //primero bsucamos si tiene, si hay eliminamos la cuenta, los datos del banco y finalmente el proveedor
    const findProveedor = await proveedor.findOne({
      where: {
        id,
      },
    });
    if (findProveedor) {
      //primero eliminamos la cuenta de banco
      const deleteCuenta = await cuenta.destroy({
        where: {
          id_proveedor: id,
        },
      });
      //segundo eliminamos el Contacto
      const deleteContacto = await contactoproveedor.destroy({
        where: {
          id_proveedor: id,
        },
      });
      //tercero eliminamos finalmente al maldito proveedor
      const deleteProvider = await proveedor.destroy({
        where: {
          id,
        },
      });
      res.json({
        resultado: true,
        message: "Proveedor eliminado correctamente",
      });
    } else {
      res.json({
        resultado: false,
        message: "Error al eliminar, no se encontro Proveedor",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateProvider(req, res) {
  const { id } = req.params;
  const {
    nombre,
    pais,
    rut,
    direccion,

    email,
    telefono,

    nombre_proveedor,
    cargo,
    correo,
    fono,

    n_cuenta,
    buzon,
    rutt,
    banco,
    tipo_cuenta,
  } = req.body;

  const updateProvider = await proveedor.update(
    {
      nombre,
      pais,
      rut,
      direccion,
      email,
      telefono,
    },
    {
      where: { id },
    }
  );
  const UpdateCuenta = await cuenta.update(
    {
      n_cuenta,
      email: buzon,
      rut: rutt,
      nombre_empresa: nombre,
      banco,
      tipo_cuenta,
    },
    {
      where: { id },
    }
  );
  const UpdateContacto = await contactoproveedor.update(
    {
      nombre: nombre_proveedor,
      cargo,
      email: correo,
      telefono: fono,
    },
    {
      where: { id },
    }
  );

  res.json({
    resultado: true,
    message: "Proveedor update Succesfully! (: ",
  });
}
