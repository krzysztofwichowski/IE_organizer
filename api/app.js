const http = require('http')
const { env, port, ip, apiRoot } = require('./config')
const express = require('./services/express')
const api = require('./api')
const sequelize = require('./services/sequelize')

const app = express(apiRoot, api)
const server = http.createServer(app)

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

module.exports = app
