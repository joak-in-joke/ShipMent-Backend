var express = require("express");
var router = express.Router();

var usersRouter = require("./users");
var shipmentsRouter = require("./shipments");
var shipmentRouter = require("./shipment");
var misionsRouter = require("./misions");
var authRouter = require("./auth");
var dashboardRouter = require("./dashboard");
var portsRouter = require("./ports");
var providerRouter = require("./provider");
var timelineRouter = require("./timeline");
var agentRouter = require("./agent");
var operatorRouter = require("./operator");

router.use("/users", usersRouter);
router.use("/shipments", shipmentsRouter);
router.use("/shipment", shipmentRouter);
router.use("/mision", misionsRouter);
router.use("/auth", authRouter);
router.use("/dashboard", dashboardRouter);
router.use("/port", portsRouter);
router.use("/provider", providerRouter);
router.use("/timeline", timelineRouter);
router.use("/agent", agentRouter);
router.use("/operator", operatorRouter);

module.exports = router;
