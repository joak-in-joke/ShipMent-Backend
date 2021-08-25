var express = require("express");
var router = express.Router();

// Import controllers
var { signIn } = require("../controllers/auth");

// Routes
router.post("/signin", signIn);

module.exports = router;
