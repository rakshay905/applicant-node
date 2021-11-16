const Joi = require('joi') 
const schemas = {
    user: Joi.object().keys({ 
        first_name: Joi.string().min(4).max(30).required(), 
        middle_name: Joi.string().max(30),
        last_name: Joi.string().min(4).max(30).required(),
        phone_number: Joi.string().length(10).required(),
        email: Joi.string().email().required(),
        address: Joi.object().keys({
            street: Joi.string().max(30).required(),
            unit: Joi.string(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            zip_code: Joi.string().length(6).required(),
            type: Joi.string().required()
        }),
        preferred_deductible: Joi.string().required(),
        date_of_birth: Joi.string().required(),
        residence_status: Joi.string().required(),
        industry: Joi.string().required(),
        occupation: Joi.string().required(),
        education: Joi.string().required() 
    }) 
}
  // define all the other schemas below 
module.exports = schemas;