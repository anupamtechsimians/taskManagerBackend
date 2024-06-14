const Joi = require('joi');

const OrganisationCreateSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().optional(),
  state: Joi.string().optional(),
  country: Joi.string().optional(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  website: Joi.string().allow(null, '').optional(),
  logoUrl: Joi.string().allow(null, '').optional(),
  metaData: Joi.object().optional()
});
const OrganisationUpdateSchema = Joi.object({
  name: Joi.string().allow(null, '').optional(),
  address: Joi.string().allow(null, '').optional(),
  domain: Joi.string(),
  city: Joi.string().allow(null, '').optional(),
  state: Joi.string().allow(null, '').optional(),
  country: Joi.string().allow(null, '').optional(),
  phoneNumber: Joi.string().allow(null, '').optional(),
  email: Joi.string().email().allow(null, '').optional(),
  website: Joi.string().allow(null, '').optional(),
  logoUrl: Joi.string().allow(null, '').optional(),
  metaData: Joi.object().optional()
});

module.exports = {OrganisationCreateSchema,OrganisationUpdateSchema};
