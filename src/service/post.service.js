const { BlogPost, User, Category } = require('../models');

const createPostBlog = async ({ title, content, categoryIds }) => {
    const newUser = await BlogPost.create({ title, content, categoryIds, updated: new Date(), published: new Date() });
    return newUser;
}; // errado, ajustar o código

const getPostBlog = async () => {
  const { categories } = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
   console.log('service', categories);
        return categories;
      };

module.exports = {
    createPostBlog,
    getPostBlog,
};