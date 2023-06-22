require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const tokenValidation = require('./middlewares/tokenValidation')
const { tallerRouter, authRouter } = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/talleres', tallerRouter)
app.use('/api/auth', authRouter)

// Configuración de CORS
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.use(cors())
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
  });
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  })
