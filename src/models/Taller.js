/* const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: 'string',
  name: 'string',
  email: 'string',
  coords: [{
    longitude: 'number',
    latitude: 'number'
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Taller', schema); */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tallerSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['Feature']
  },
  geometry: {
    type: {
      type: String,
      required: true,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  properties: {
    name: {
      type: String,
      required: true
    }
  }
});

const Taller = mongoose.model('Taller', tallerSchema);

module.exports = Taller;


/*
{
  "name": "frank",
  "email": "frank@frank.cl",
  "longitude": -73.04977,
  "latitude": -36.82699
}


{
  "name": "frank",
  "email": "frank2@mail.com",
  "isAdmin": true,
  "password": "12345"
}

 */