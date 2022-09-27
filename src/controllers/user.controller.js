const userServise = require('../service/user.service');
const validationUserCreate = require('../middlewares/validationUserCreate');
const geratoken = require('../util/geraToken');
const { User } = require('../models');

const createUser = async (req, res) => {
const { error } = validationUserCreate(req.body);

if (error) return res.status(400).json({ message: error.message });

const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);

if (user) return res.status(409).json({ message: 'User already registered' });

await userServise.createUser(req.body);

const token = geratoken(req.body.email, req.body.id);

return res.status(201).json({ token });
};

module.exports = { createUser };