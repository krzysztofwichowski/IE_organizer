const path = require('path')
const merge = require('lodash/merge')

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        root: path.join(__dirname, '..'),
        port: 4000,
        ip: '127.0.0.1',
        apiRoot: '/api',
    },
    test: {},
    development: {
        database: {
            host: 'localhost',
            username: 'root',
            password: '',
            db: 'organizer',
            dialect: 'mysql',
        }
    },
    production: {
        ip: process.env.IP || undefined,
        port: process.env.PORT || 8080,
        database: {
            host: 'sql_server_ip',
            username: 'real_username',
            password: 'real_password',
            db: 'real_db_name',
            dialect: 'mysql',
        }
    }
}

module.exports = merge(config.all, config[config.all.env])
