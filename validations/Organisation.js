const Joi = require('joi');

const OrganisationCreateSchema = Joi.object({
  name: Joi.string().required(),
  strength: Joi.string().valid('0-100', '101-500', '501-1000', '1001-10000'),
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
  strength: Joi.string().allow(null, '').valid('0-100', '101-500', '501-1000', '1001-10000'),
  address: Joi.string().allow(null, '').optional(),
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
