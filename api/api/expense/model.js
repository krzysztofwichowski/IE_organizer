const Sequelize = require('sequelize')
const sequelize = require('../../services/sequelize');
const Op = Sequelize.Op

const Expense = sequelize.define('expense', {
    title: {type: Sequelize.STRING, allowNull: false},
    description: {type: Sequelize.STRING, allowNull: false},
    date: {type: Sequelize.DATE, allowNull: false}
})

Expense.prototype.view = function(full) {        
    const view = {
        id: this.id,
        title: this.title,
        description: this.description,
        date: this.date
    }

    return full ? {
        ...view,
        updatedAt: this.updatedAt,
        createdAt: this.createdAt
    } : view
}

sequelize.sync()
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = Expense
