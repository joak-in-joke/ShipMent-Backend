import "@babel/polyfill";
var cors = require("cors");

const express = require("express");
const morgan = require("morgan");
//const path = require('path');
//const cors = require('cors');
//const cookieParser = require('cookie-parser');
//require('./database/association');

//inicialización

const app = express();

//settings

app.set("port", process.env.PORT || 4000);

//middlewares server

//app.use(cookieParser());
//app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales

app.use((req, res, next) => {
  next();
});

import mision from "./routes/mision.routes.js";
import shipment from "./routes/embarques.routes";
import auth from "./routes/auth.routes";
import dataembarque from "./routes/dataembarque.routes";
import timeline from "./routes/lineadetiempo.routes";
import proveedores from "./routes/proveedores.routes";
//routes

app.use(cors());
app.use("/mision", mision);
app.use("/shipment", shipment);
app.use("/auth", auth);
app.use("/dataembarque", dataembarque);
app.use("/timeline", timeline);
app.use("/proveedores", proveedores);

//public

//app.use(express.static('../public'));

export default app;
