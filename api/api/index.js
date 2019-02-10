const {Router} = require('express')
const expense = require('./expense')

// Routing
const router = new Router()
router.use('/expenses', expense)


// 404 Error handler
router.use((req, res, next) =>  res.status(404).send({error: 'Routing not found'}))

// Error handler
router.use((err, req, res, next) =>  {
    if(err.name === 'SequelizeValidationError')
        return res.status(400).send({errors: err.errors.map(e => e.message)})

    console.error(err)
    res.status(500).send({errors: ['Application error']})
})

module.exports = router
