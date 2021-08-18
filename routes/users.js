var express = require('express');
var router = express.Router();

// Import controllers
var getUsers = require('../controllers/users/getUsers');

// Routes
router.get('/', getUsers);

module.exports = router;
