var express = require("express");
var router = express.Router();

// Import controllers
var { getPorts, createPort } = require("../controllers/ports");

// Routes
router.get("/", getPorts);
router.post("/create", createPort);

module.exports = router;
