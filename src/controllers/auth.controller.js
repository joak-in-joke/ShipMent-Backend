import usuarios from "../models/users";
// import usuario from "../models/usuario";
import datausuario from "../models/datausuario";
import roles from "../models/roles";
import permisos from "../models/permisos";
import bcrypt from "bcryptjs";
import config from "../config";
import jwt from "jsonwebtoken";
import md5 from "md5";

export const comparePassword = async (password, receivePassword) => {
  return await bcrypt.compare(password, receivePassword);
};

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const consulRol = async (id) => {
  const codRol = await roles.findOne({
    where: { id },
    attributes: ["cod_rol"],
  });
  return codRol;
};

export const consulPermisos = async (id_usuario) => {
  const permisosUser = await permisos.findOne({
    where: { id_usuario },
    attributes: [
      "perm_finanza",
      "perm_misiones",
      "perm_superuser",
      "perm_admin",
    ],
  });
  return permisosUser;
};

export const signUp = async (req, res) => {
  const { rut, nombre, apellido, roles_id, password } = req.body;
  try {
    let newUsers = await usuarios.create(
      {
        rut,
        nombre,
        apellido,
        roles_id,
        password: await encryptPassword(password),
      },
      {
        fields: ["rut", "nombre", "apellido", "roles_id", "password"],
      }
    );
    if (newUsers) {
      const user_token = jwt.sign({ id: newUsers.id }, config.SECRET, {
        expiresIn: 120,
      });
      res.json({
        message: "Usuario registrado correctamente",
        data: newUsers,
        token: user_token,
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      message:
        "Problemas al registrar usuario, contactese con el administrador del sistema",
      data: {},
    });
  }
};

export const signIn = async (req, res) => {
  const { mail, pass } = req.body;
  console.log(mail, pass);
  // const mail = email;
  let bool = false;
  const user = await datausuario.findOne({
    where: { mail },
    attributes: [
      "id_usuario",
      "mail",
      "nombre",
      "apellido",
      "rut",
      "dv",
      "pass",
      "mail",
      "asesor",
      "telefono",
      "cargo",
    ],
  });
  if (user) {
    const comparePassword = async (password, receivePassword) => {
      return await bcrypt.compare(password, receivePassword);
    };
    const pas = await encryptPassword(pass);
    const matchPassword = await comparePassword(pass, user.pass);
    let user_token = null;

    // if (matchPassword) {
    if (user.pass === pass) {
      user_token = jwt.sign({ id: user.id_usuario }, config.SECRET, {
        expiresIn: "12h",
      });
      res.cookie("token", user_token, { httpOnly: true });
      const codRol = await consulPermisos(user.id_usuario);
      const result = {
        id: user.id_usuario,
        nombre: user.nombre,
        apellido: user.apellido,
        rut: user.rut,
        dv: user.dv,
        mail: user.mail,
        telefono: user.telefono,
        asesor: user.asesor,
        cargo: user.cargo,
        permisos: codRol,
      };
      bool = true;
      res.json({ Resultado: bool, usuario: result, token: user_token });
    } else {
      res.json({ resultado: bool, message: "Credenciales incorrectas primer if" });
    }
  } else {
    res.json({ resultado: bool, message: "Credenciales incorrectas segundo if" });
  }
};

export const verifyAdm = async (req, res) => {
  const token = req.cookies.token;
  !token &&
    res.json({
      resul: null,
      cod_rol: "",
      message: "Ha ocurrido un problema con la autenticación",
    });
  let verifyDecoded = null;
  const aux = jwt.verify(token, config.SECRET, (err) => {
    verifyDecoded = err;
  });
  if (verifyDecoded !== null) {
    res.json({ resul: null, cod_rol: "", message: "Su sesión ha expirado" });
  } else {
    const decoded = jwt.verify(token, config.SECRET);
    let id = decoded.id;
    const user = await usuarios.findOne({
      where: { id },
      attributes: ["roles_id"],
    });
    id = user.roles_id;
    const rol = await roles.findOne({
      where: { id },
      attributes: ["cod_rol"],
    });
    rol.cod_rol === "adm"
      ? res.json({ resul: true, cod_rol: rol.cod_rol, message: "" })
      : res.json({
          resul: false,
          cod_rol: rol.cod_rol,
          message:
            "Su usuario no se encuentra autorizado para acceder a esta interfaz",
        });
  }
};

export const verifySup = async (req, res) => {
  const token = req.cookies.token;
  !token &&
    res.json({
      resul: null,
      cod_rol: "",
      message: "Ha ocurrido un problema con la autenticación",
    });
  let verifyDecoded = null;
  const aux = jwt.verify(token, config.SECRET, (err) => {
    verifyDecoded = err;
  });
  if (verifyDecoded !== null) {
    res.json({ resul: null, cod_rol: "", message: "Su sesión ha expirado" });
  } else {
    const decoded = jwt.verify(token, config.SECRET);
    let id = decoded.id;
    const user = await usuarios.findOne({
      where: { id },
      attributes: ["roles_id"],
    });
    id = user.roles_id;
    const rol = await roles.findOne({
      where: { id },
      attributes: ["cod_rol"],
    });
    rol.cod_rol === "sup"
      ? res.json({ resul: true, cod_rol: rol.cod_rol, message: "" })
      : res.json({
          resul: false,
          cod_rol: rol.cod_rol,
          message:
            "Su usuario no se encuentra autorizado para acceder a esta interfaz",
        });
  }
};

export const verifyUsr = async (req, res) => {
  const token = req.cookies.token;
  !token &&
    res.json({
      resul: null,
      cod_rol: "",
      message: "Ha ocurrido un problema con la autenticación",
    });
  let verifyDecoded = null;
  const aux = jwt.verify(token, config.SECRET, (err) => {
    verifyDecoded = err;
  });
  if (verifyDecoded !== null) {
    res.json({ resul: null, cod_rol: "", message: "Su sesión ha expirado" });
  } else {
    const decoded = jwt.verify(token, config.SECRET);
    let id = decoded.id;
    const user = await usuarios.findOne({
      where: { id },
      attributes: ["roles_id"],
    });
    id = user.roles_id;
    const rol = await roles.findOne({
      where: { id },
      attributes: ["cod_rol"],
    });
    rol.cod_rol === "usr"
      ? res.json({ resul: true, cod_rol: rol.cod_rol, message: "" })
      : res.json({
          resul: false,
          cod_rol: rol.cod_rol,
          message:
            "Su usuario no se encuentra autorizado para acceder a esta interfaz",
        });
  }
};

export const logOut = async (req, res) => {
  const user_token =
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  res.cookie("token", user_token, { httpOnly: true });
  res.json({ resultado: false, message: "Se ha cerrado la sesión" });
};

export const getRol = async (req, res) => {
  const token = req.cookies.token;
  !token && res.json({ resultado: false, cod_rol: "", message: "" });
  let verifyDecoded = null;
  const aux = jwt.verify(token, config.SECRET, (err) => {
    verifyDecoded = err;
  });
  if (verifyDecoded !== null) {
    res.json({ resultado: false, cod_rol: "", message: "" });
  } else {
    const decoded = jwt.verify(token, config.SECRET);
    let id = decoded.id;
    const user = await usuarios.findOne({
      where: { id },
      attributes: ["roles_id"],
    });
    id = user.roles_id;
    const rol = await roles.findOne({
      where: { id },
      attributes: ["cod_rol"],
    });
    res.json({ resultado: true, codRol: rol.cod_rol, message: "" });
  }
};
