const Joi = require('joi');

const conversationSchema = Joi.object({
  name: Joi.string().optional(),
  type: Joi.string().required().valid(["GROUP","SINGLE"]),
  description: Joi.string().optional(),
  icon: Joi.string().optional(),
});
const memberSchema = Joi.object({
  user_ids: Joi.array().required(),
  conversation_id:Joi.number().required(),
  role: Joi.string().optional().valid(["MEMBER","OWNER"]).default("MEMBER"),
});

module.exports = {conversationSchema,memberSchema}