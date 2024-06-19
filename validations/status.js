const Joi = require('joi');

const statusSchema = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required(),

});
const statusUpdateSchema = Joi.object({
  name: Joi.string(),
  color: Joi.string(),
  is_active: Joi.boolean(),

});


module.exports = {statusSchema,statusUpdateSchema};
