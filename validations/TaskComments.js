const Joi = require('joi');

const taskCommentSchema = Joi.object({
    comment: Joi.string().allow(null),
    media: Joi.array().items(Joi.string()).allow(null),
});

module.exports = {taskCommentSchema};
