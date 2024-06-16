const Joi = require('joi');

const conversationSchema = Joi.object({
  name: Joi.string().optional(),
  type: Joi.string().required(),
  description: Joi.string().optional(),
  icon: Joi.string().optional(),
});
const memberSchema = Joi.object({
  user_ids: Joi.array().required(),
  conversation_id:Joi.number().required(),
  role: Joi.string().optional(),
});

module.exports = {conversationSchema,memberSchema}