const express = require('express');

const tokenValidation = require('../middlewares/tokenValidation');
const postController = require('../controllers/post.controller');

const routers = express.Router();

routers.post('/', postController.createPostBlog);
routers.get('/', tokenValidation, postController.getPostBlog);

module.exports = routers;