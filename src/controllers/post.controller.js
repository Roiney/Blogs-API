const postService = require('../service/post.service');

const createPostBlog = async (req, res) => {
const result = await postService.createPostBlog(req.body);
return res.status(201).json(result);
};

const getPostBlog = async (_req, res) => {
    const result = await postService.getPostBlog();
    return res.status(201).json(result);
    };

module.exports = { 
    createPostBlog,
    getPostBlog,
 };