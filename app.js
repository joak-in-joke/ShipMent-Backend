var cors = require("cors");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const port = 4000;

var indexRouter = require("./routes/index");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Shipment Backend initialized puerto: ${port}`);
});

module.exports = app;
