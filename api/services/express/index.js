const express = require('express')
const cors = require('cors');

const bodyParser = require('body-parser')

const expressConfig = (apiRoot, routes) => {
  const app = express()
  app.use(cors())
  app.use(bodyParser.urlencoded({extended: true})); //bez tego nie działa
  app.use(bodyParser.json())  // obsluga dekodowania JSON
  app.use(apiRoot, routes)

  return app
}

module.exports = expressConfig
