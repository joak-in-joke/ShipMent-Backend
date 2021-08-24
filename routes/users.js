var express = require("express");
var router = express.Router();

// Import controllers
var {
  getUsers,
  getUsersId,
  deleteUser,
  createUser,
  editUser
} = require("../controllers/users/index");

// Routes
router.get("/", getUsers);
router.get("/:id", getUsersId);
router.post("/delete", deleteUser);
router.post("/add", createUser);
router.post("/update", editUser);

module.exports = router;
