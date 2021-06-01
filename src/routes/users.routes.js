const express = require('express');
const router = express.Router();
import {getAllUsers, getUsersId, deleteUsers, updateUsers} from '../controllers/users.controller';
import * as authJwt from '../middlewares/authJwt';

// users

router.get('/', getAllUsers);

// users/:id

router.get('/:id', getUsersId);
router.delete('/:id', deleteUsers);
router.put('/:id', updateUsers);

module.exports = router;