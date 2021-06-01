import '@babel/polyfill';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./database/association');

//inicialización

const app = express();

//settings

app.set('port', process.env.PORT || 4000);

//middlewares server

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales

app.use((req,res,next) => {
    next();
});

//Importar rutas

import roles from './routes/roles.routes.js';
import users from './routes/users.routes.js';
import auth from './routes/auth.routes.js';
import datos from './routes/datos.routes.js';
import misiones from './routes/misiones.routes';
import embarques from './routes/embarques.routes';
import personal from './routes/personal.routes';
import provedores from './routes/provedores.routes';
import comentarios from './routes/comentarios.routes';
//routes

app.use('/users', users);
app.use('/auth', auth);
app.use('/roles', roles);
app.use('/misiones', misiones);
app.use('/datos', datos);
app.use('/embarques', embarques);
app.use('/personal', personal);
app.use('/provedores', provedores);
app.use('/comentarios', comentarios);
//public

//app.use(express.static('../public'));

export default app;


