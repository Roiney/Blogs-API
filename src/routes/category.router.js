const express = require('express');

const tokenValidation = require('../middlewares/tokenValidation');
const categoryController = require('../controllers/category.controller');

const routers = express.Router();

routers.post('/', tokenValidation, categoryController.postCategory);

module.exports = routers;