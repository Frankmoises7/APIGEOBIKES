const Joi = require('joi')

const registerSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  isAdmin: Joi.bool(),
  password: Joi.string().required()
})

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

module.exports = {
  registerSchema,
  loginSchema
}