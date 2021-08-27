var express = require("express");
var router = express.Router();

// Import controllers
var { getOperator, createOperator } = require("../controllers/operators");

// Routes
router.get("/", getOperator);
router.post("/create", createOperator);

module.exports = router;
