const AccessError = require('../error/Error');

module.exports = schema => {
    return (req, res, next) => {
        const error = schema.validate(req.body).error;
        if (error) {
            next(new AccessError(error.details[0].message));
        }
        next();
    };
};