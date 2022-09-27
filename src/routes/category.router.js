const express = require('express');

const tokenValidation = require('../middlewares/tokenValidation');
const categoryController = require('../controllers/category.controller');

const routers = express.Router();

routers.post('/', tokenValidation, categoryController.postCategory);
routers.get('/', tokenValidation, categoryController.getCategory);

module.exports = routers;