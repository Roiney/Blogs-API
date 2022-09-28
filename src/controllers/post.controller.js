const postService = require('../service/post.service');

const createPostBlog = async (req, res) => {
const result = await postService.createPostBlog(req.body);
return res.status(201).json(result);
};

const getPostBlog = async (_req, res) => {
    const result = await postService.getPostBlog();
    console.log('controller', result);
    return res.status(200).json(result);
    };

module.exports = { 
    createPostBlog,
    getPostBlog,
 };