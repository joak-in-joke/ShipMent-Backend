var express = require("express");
var router = express.Router();

// Import controllers
var { signIn, verifyToken } = require("../controllers/auth");

// Routes
router.post("/signin", signIn);
router.post("/verifysesion", verifyToken);

module.exports = router;
