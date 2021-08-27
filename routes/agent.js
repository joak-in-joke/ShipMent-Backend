var express = require("express");
var router = express.Router();

// Import controllers
var { getAgent, createAgent } = require("../controllers/agents");

// Routes
router.get("/", getAgent);
router.post("/create", createAgent);

module.exports = router;
