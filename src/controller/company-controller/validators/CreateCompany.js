const joi = require('joi');

module.exports = joi.object({
    id : joi.number().required(),
    name: joi.string().required(),
    address: joi.string().required(),
    city: joi.string().required(),
    postalCode: joi.string().pattern(/^[0-9]+$/).required(),
});


