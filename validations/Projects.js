const Joi = require('joi');

const projectSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().allow(null),
    priority: Joi.string().allow(null),
    assignee: Joi.string().allow(null),
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().allow(null),
    images: Joi.array().items(Joi.string()).allow(null),
});
const projectUpdateSchema = Joi.object({
    name: Joi.string().allow(null),
    description: Joi.string().allow(null),
    status: Joi.string().allow(null),
    priority: Joi.string().allow(null),
    assignee: Joi.string().allow(null),
    start_date: Joi.date().iso().allow(null),
    end_date: Joi.date().iso().allow(null),
    images: Joi.array().items(Joi.string()).allow(null),
});

module.exports = {projectSchema,projectUpdateSchema};
