const Joi = require('joi')

const tallerCreationSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required()
})

module.exports = {
  tallerCreationSchema
}