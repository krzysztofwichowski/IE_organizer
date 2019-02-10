const { success, notFound } = require('../../services/response/')
const Expense = require('../expense/model')

const create = ({ body }, res, next) => {
    Expense.create(body)
        .then((expense) => expense.view(true))
        .then(success(res))
        .catch(next)
}

const index = ({ params }, res, next) => {
    Expense.findAll()
        .then((expenses) => expenses.map((expense) => expense.view()))
        .then(success(res))
        .catch(next)
}

const show = ({ params }, res, next) => {
    Expense.findByPk(params.id)
        .then(notFound(res))
        .then((expense) => expense ? expense.view(true) : null)
        .then(success(res))
        .catch(next)
}


const update = ({ body , params }, res, next) => {
    Expense.findByPk(params.id)
        .then(notFound(res))
        .then((expense) => expense ? Object.assign(expense, body).save() : null)
        .then((expense) => expense ? expense.view(true) : null)
        .then(success(res))
        .catch(next)
}

const destroy = ({ params }, res, next) => {
    Expense.findByPk(params.id)
        .then(notFound(res))
        .then((expense) => expense ? expense.destroy() : null)
        .then(success(res, 204))
        .catch(next)
}

module.exports = {
    create, index, show, update, destroy
}
