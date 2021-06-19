import documentos from "../models/documentos";
import documento from "../models/documento";

export async function uploadFile(req, res) {
  if (req.files === null) {
    return res
      .status(400)
      .json({ resultado: false, message: "No hay archivos" });
  }
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (e) {
      console.error(e);
      return res.state(500).json(e);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
}
export async function getFile(req, res) {
  try {
    const {} = req.body;

    const getdocumentid = await documento.findOne({
      where: {
        id,
      },
    });
  } catch (e) {
    res.json({ respuesta: false, message: "ops algo malio sal", error: e });
  }
}
