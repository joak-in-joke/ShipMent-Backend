var express = require("express");
var router = express.Router();

// Import controllers
var { getState } = require("../controllers/dashboard");

// Routes
router.get("/state", getState);

module.exports = router;
