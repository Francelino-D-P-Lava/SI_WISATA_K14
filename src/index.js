require('dotenv').config()

const express = require('express')
const cors = require('cors')

const authRoute = require('./routes/authRoute')
const categoryRoute = require('./routes/categoryRoute')
const wisataRoute = require('./routes/wisataRoute')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../openapi.json')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/wisata', wisataRoute)

app.get('/', (req, res) => {
  res.json({
    message: 'API Sistem Informasi Wisata'
  })
})

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)

app.listen(3000, () => {
  console.log('Server running di port 3000')
})