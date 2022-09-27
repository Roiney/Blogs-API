const categoryService = require('../service/category.service');
const validationCategory = require('../middlewares/validationCategory');

const postCategory = async (req, res) => {
const { error } = validationCategory(req.body);

if (error) return res.status(400).json({ message: '"name" is required' });

const newCategory = await categoryService.createCategory(req.body);
console.log(newCategory);
return res.status(201).json(newCategory);
};

const getCategory = async (_req, res) => {
    const result = await categoryService.getCategory();
    return res.status(200).json(result);
};

module.exports = { 
    postCategory, 
    getCategory,
 };