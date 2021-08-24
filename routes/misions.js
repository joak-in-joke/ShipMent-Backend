var express = require("express");
var router = express.Router();

// Import controllers
var { getMisions } = require("../controllers/misions");

// Routes
router.get("/", getMisions);

module.exports = router;
