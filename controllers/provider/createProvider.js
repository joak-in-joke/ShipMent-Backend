const { response } = require("express");
var models = require("../../models");
var ProveedorCliente = models.ProveedorCliente;
var CuentaBanco = models.CuentaBancos;
var Contacto = models.Contactos;

const createProvider = async (req, res = response) => {
    const {
        pais,
        direccion,
        nombre,
        rut,
        telefono,
        email,
        n_cuenta,
        email_cuentabanco,
        rut_cuentabanco,
        nombre_empresa,
        tipo_de_cuenta,
        nombre_contacto,
        cargo,
    } = req.body;
    try {
        const getNombre = await ProveedorCliente.findOne({
            where: { nombre },
        });
        if (getNombre) {
            res.json({ resultado: false, message: "Proveedor existente" });
        } else {
            const newProveedorCliente = await ProveedorCliente.create(
                {
                    pais,
                    direccion,
                    nombre,
                    rut,
                    telefono,
                    email,
                },
                {
                    fields: [
                        "pais",
                        "direccion",
                        "nombre",
                        "rut",
                        "telefono",
                        "email",
                    ],
                    attributes: ["id"],
                }
            );
            CuentaBanco.create(
                {
                    id_proveedor_cliente: newProveedorCliente.id,
                    n_cuenta,
                    email: email_cuentabanco,
                    rut: rut_cuentabanco,
                    nombre_empresa,
                    tipo_de_cuenta,
                },
                {
                    fields: [
                        "id_proveedor_cliente",
                        "n_cuenta",
                        "email",
                        "rut",
                        "nombre_empresa",
                        "tipo_de_cuenta",
                    ]
                }
            );
            Contacto.create(
                {
                    id_proveedor_cliente: newProveedorCliente.id,
                    nombre_contacto,
                    cargo,
                },
                {
                    fields: [
                        "id_proveedor_cliente",
                        "nombre_contacto",
                        "cargo",
                    ]
                }
            );
            res.json({ resultado: true, message: "Proveedor creado" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ resultado: false, message: error });
    }
};

module.exports = createProvider;
