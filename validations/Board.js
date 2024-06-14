const Joi = require('joi');

const boardSchema = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required(),

});
const boardUpdateSchema = Joi.object({
  name: Joi.string(),
  color: Joi.string(),
  board_id: Joi.number(),
  is_active: Joi.boolean(),

});


module.exports = {boardSchema,boardUpdateSchema};
