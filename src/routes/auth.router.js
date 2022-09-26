const express = require('express');
const authenticate = require('../middlewares/authentication');

const routers = express.Router();

routers.post('/', authenticate);

module.exports = routers;