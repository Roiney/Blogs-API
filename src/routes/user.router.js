const express = require('express');

const userController = require('../controllers/user.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', userController.createUser);
routers.get('/', tokenValidation, userController.getUser);

module.exports = routers;