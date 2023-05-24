const Joi = require("joi");

const meetScheme = {
    createmeetScheme: Joi.object().keys({
        title: Joi.string()
            .required()
            .min(1)
            .max(255),
        description: Joi.string()
            .min(3)
            .max(255),
        tags: Joi.string()
            .min(2)
            .max(255),
        location: Joi.string()
            .min(2)
            .max(255)
            .required(),
        time: Joi.date()
            .raw()
            .required(),
    }),


    updatemeetScheme: Joi.object().keys({
        title: Joi.string()
            .min(1)
            .max(255)
            .required(),
        description: Joi.string()
            .min(3)
            .max(255),
        tags: Joi.string()
            .min(2)
            .max(255),
        location: Joi.string()
            .min(2)
            .max(255)
            .required(),
        time: Joi.date()
            .required(),

    })

}

module.exports = meetScheme;