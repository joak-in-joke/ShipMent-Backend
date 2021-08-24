var cors = require("cors");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const port = 4000;


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var shipmentsRouter = require("./routes/shipments");
var shipmentRouter = require("./routes/shipment");
var misionsRouter = require('./routes/misions');
var authRouter = require('./routes/auth');


var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/shipments", shipmentsRouter);
app.use("/shipment", shipmentRouter);
app.use('/mision', misionsRouter);
app.use('/auth', authRouter);


app.listen(port, () => {
  console.log(`Shipment Backend initialized`);
});

module.exports = app;
