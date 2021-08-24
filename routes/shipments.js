var express = require("express");
var router = express.Router();

// Import controllers
var {
  getShipments,
  deleteShipments,
  filterShipments,
} = require("../controllers/shipments/index");

// Routes
router.get("/", getShipments);
router.post("/deleteMasive", deleteShipments);
router.post("/filter", filterShipments);

module.exports = router;
