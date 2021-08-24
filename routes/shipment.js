var express = require("express");
var router = express.Router();

// Import controllers
var { getShipment, deleteShipment } = require("../controllers/shipment/index");

// Routes
router.get("/:id", getShipment);
router.delete("/delete", deleteShipment);

module.exports = router;
