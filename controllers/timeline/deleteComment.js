const { response } = require("express");

var models = require("../../models");
const deleteProvider = require("../provider/deleteProvider");
var ComentariosLTiempo = models.ComentariosLTiempo;

const deleteComment = async (req, res = response) => {
    const {
        id,
        id_linea_tiempo
     } = req.body;
    try{
        await ComentariosLTiempo.destroy({
            where:
               { id , id_linea_tiempo }
        });
        res.json({ resultado: true, message: "Comentario eliminado"})
    } catch(error) {
        console.log(error);
        res.status(400).json({ resultado: false, message: error })
    }
}

module.exports = deleteComment;