const Joi = require('joi');

const taskSchema = Joi.object({
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').required(),
    board_id: Joi.number().required(),
    assigned_to: Joi.number().integer().allow(null),
    due_date: Joi.date().iso().allow(null),
    description: Joi.string().allow(null),
    title: Joi.string().allow(null),
    tags: Joi.string().allow(null),
    documents: Joi.array().allow(null).default([]),
});
const taskUpdateSchema = Joi.object({
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH'),
    board_id: Joi.number(),
    assigned_to: Joi.number().integer().allow(null),
    due_date: Joi.date().iso().allow(null),
    description: Joi.string().allow(null),
    title: Joi.string().allow(null),
    tags: Joi.string().allow(null),
    documents: Joi.array().allow(null).default([]),
});

module.exports = {taskSchema,taskUpdateSchema};
