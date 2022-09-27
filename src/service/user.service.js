const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const getUser = async () => {
 const getUserAll = await User.findAll();
 return getUserAll;
};

module.exports = { 
    createUser,
    getUser,
 };