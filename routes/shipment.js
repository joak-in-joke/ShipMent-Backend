var express = require("express");
var router = express.Router();

// Import controllers
var { getShipment } = require("../controllers/shipment/index");

// Routes
router.get("/:id", getShipment);

module.exports = router;
