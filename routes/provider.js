var express = require('express');
var router = express.Router();

// Import controllers
var { getProviders, getAllProviders, editProvider, createProvider, deleteProvider } = require('../controllers/provider/index');

// Routes
router.get('/', getProviders);
router.get('/all', getAllProviders);
router.post('/update', editProvider);
router.post('/add', createProvider);
router.post('/delete', deleteProvider);

module.exports = router;