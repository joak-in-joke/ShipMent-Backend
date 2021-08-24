var express = require("express");
var router = express.Router();

// Import controllers
var { getMisions, createMision, deleteMision } = require("../controllers/misions");

// Routes
router.get("/", getMisions);
router.post("/delete", deleteMision);
router.post("/add", createMision);

module.exports = router;
