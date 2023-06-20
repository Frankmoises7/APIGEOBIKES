require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const tokenValidation = require('./middlewares/tokenValidation')
const { tallerRouter, authRouter } = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/talleres', tallerRouter)
app.use('/api/auth', authRouter)

//todo: REVISAR EL PROBLEMA DE CORS

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  })

