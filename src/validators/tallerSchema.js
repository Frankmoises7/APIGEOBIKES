/* const Joi = require('joi')

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
} */

const Joi = require('joi');

const tallerCreationSchema = Joi.object({
  type: Joi.string().required(),
  geometry: Joi.object({
    type: Joi.string().required(),
    coordinates: Joi.array().items(Joi.number()).required()
  }),
  properties: Joi.object({
    name: Joi.string().required()
  })
});

module.exports = tallerCreationSchema;
