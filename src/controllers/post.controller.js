const postService = require('../service/post.service');

const getPostBlog = async (_req, res) => {
    const result = await postService.getPostBlog();
    console.log('controller', result);
    return res.status(200).json(result);
    };

const getPostBlogId = async (req, res) => {
    const { id } = req.params;
    const result = await postService.getPostBlogId(id);
    if (!result) { return res.status(404).json({ message: 'Post does not exist' }); }
    return res.status(200).json(result);
};

module.exports = { 
    getPostBlog,
    getPostBlogId,
 };