const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const getUser = async () => {
 const getUserAll = await User.findAll({ attributes: { exclude: ['password'] } });
 return getUserAll;
};

const getUserId = async (id) => {
    const getUserIdPlan = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
      });

    return getUserIdPlan;
};

module.exports = { 
    createUser,
    getUser,
    getUserId,
 };