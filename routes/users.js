var express = require('express');
var router = express.Router();

// Import controllers
var { getUsers, getUsersId } = require('../controllers/users/index');

// Routes
router.get('/', getUsers);
router.get('/:id', getUsersId);

module.exports = router;
