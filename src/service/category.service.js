const { Category } = require('../models');

const createCategory = async ({ name }) => {
    const newCategory = await Category.create({ name });
    console.log(newCategory);
    return newCategory;
};

const getCategory = async () => {
    const getCategoryAll = await Category.findAll();
    return getCategoryAll;
   };

module.exports = { 
    createCategory, 
    getCategory,
 };