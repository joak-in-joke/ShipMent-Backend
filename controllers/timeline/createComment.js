const { response } = require("express");

var models = require("../../models");
var ComentariosLTiempo = models.ComentariosLTiempos;

const createComment = async (req, res = response) => {
    const {
        id_linea_tiempo,
        id_usuario,
        contenido,
        creado,
        estado,
        titulo,
        fecha,
        icono
    } = req.body;
    try{
        ComentariosLTiempo.create(
            {
                id_linea_tiempo,
                id_usuario,
                contenido,
                creado,
                estado,
                titulo,
                fecha,
                icono
            },
            {
                fields: [
                    "id_linea_tiempo",
                    "id_usuario",
                    "contenido",
                    "creado",
                    "estado",
                    "titulo",
                    "fecha",
                    "icono"
                ]
            }
        );
        res.json({ resultado: true, message: "Comentario creado" });
        } catch(error) {
            console.log(error);
            res.status(400).json({ resultado: false, message: error });
        }
};

module.exports = createComment;