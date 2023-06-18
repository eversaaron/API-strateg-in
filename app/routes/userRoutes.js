const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateUser = require('../middleware/authenticateUser');

router.get('/', authenticateUser, userController.getUsers);

module.exports = router;
