const Sequelize = require('sequelize');
const {host, dialect, username, password, db} = require('../../config').database

const sequelize = new Sequelize(db, username, password, {
    host,
    dialect,
    pool: {                     // [1] Nie obowiazkowe, ale dobra rada
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        charset: 'utf8',        // Kodowanie - wazne, inaczej PL litery nie beda dzialac!
        collate: 'utf8_general_ci',
    },
    operatorsAliases: false     // Sequelize odchodzi od operatorow w postaci stringow, ale pozwala je ciagle uzywac  z ostrzezem Deprecated.
                                // Ta opcja implicit wylacza aliasy i ostrzezenie
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize


/*
1. Sequelize will setup a connection pool on initialization so you should ideally only ever create one instance per database
   if you're connecting to the DB from a single process. If you're connecting to the DB from multiple processes,
   you'll have to create one instance per process,
   but each instance should have a maximum connection pool size of "max connection pool size divided by number of instances".
   So, if you wanted a max connection pool size of 90 and you had 3 worker processes, each process's instance should have a max connection pool size of 30.
 */
