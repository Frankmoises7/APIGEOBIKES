const Joi = require('joi')

const tallerCreationSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  coords: Joi.array().items(Joi.object({
    longitude: Joi.number().required(),
    latitude: Joi.number().required()
  }))
})

module.exports = {
  tallerCreationSchema
}