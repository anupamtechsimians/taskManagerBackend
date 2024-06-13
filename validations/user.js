const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    metaData: Joi.object().optional()
  });

const userUpdateSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    is_deleted: Joi.boolean(),
    metaData: Joi.object()
  });

  module.exports = {userSchema,userUpdateSchema}