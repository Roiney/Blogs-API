const joi = require('joi');

const validationCategory = (body) =>
  joi.object({
    name: joi.string().required(),
    }).validate(body);

  module.exports = validationCategory;