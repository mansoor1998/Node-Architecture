const joi = require('joi');

const obj = joi.object({
    address: joi.string().required()
});

// nesting is also possible.

module.exports = joi.object({
    id : joi.number().required(),
    name: joi.string().required(),
    address: joi.string().required(),
    city: joi.string().required(),
    postalCode: joi.string().pattern(/^[0-9]+$/).required(),
    invoice: obj.required()
});


