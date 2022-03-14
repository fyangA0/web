const path = require('path')
const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const errorHandler = require('./utils/errorHandler')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'static')))
server.use('/api', routes)
server.use(errorHandler)

server.listen(3000, '0.0.0.0', () => {
  console.log(`\n> Ready on http://localhost:3000/`)
})

