const mongoose = require('mongoose')

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

module.exports = mongoose.model('Taller', schema);

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