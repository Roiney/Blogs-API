const { BlogPost, User, Category, PostCategory, sequelize } = require('../models');

// const createPostBlog = async ({ title, content, categoryIds }) => {
// const ValidationCategoryIds = await verifyCategories(categoryIds);

// const result = await sequelize.transaction(async (t) => {
//   const { dataValues } = await BlogPost.create({ title, content}, {
//     transaction: t,
//   });

//   const postCategories = ValidationCategoryIds
//     .map((id) => ({ categoryId: id, postId: dataValues.id }));

//   await PostCategory.bulkCreate(postCategories, { transaction: t });
//   return dataValues;
//   });

//   return result;
// }; 

// const verifyCategories = async (categoryIds) => {
//   const results = await Promise.all(categoryIds.map(async (id) => Category.findByPk(id)));
//   const categories = results.filter((result) => result)
//     .map(({ dataValues }) => dataValues);
//   return categories.map(({ id }) => id);
// };

const getPostBlog = async () => {
  const result = await BlogPost.findAll({
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
  console.log(result);
        return result;
      };

const getPostBlogId = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
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
  console.log(result);
        return result;
};

module.exports = {
    getPostBlog,
    getPostBlogId,
};