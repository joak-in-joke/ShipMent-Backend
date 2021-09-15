var express = require("express");
var router = express.Router();

// Import controllers
var {
  getShipment,
  deleteShipment,
  createShipment,
  editShipment,
} = require("../controllers/shipment/index");

// Routes
router.get("/:id", getShipment);
router.delete("/delete", deleteShipment);
router.post("/create", createShipment);
router.post("/edit", editShipment);

module.exports = router;
