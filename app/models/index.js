const config = require('../config/db')
const Sequelize = require('sequelize')

const dataType = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        HOST: config.HOST,
        dailect: config.dailect
    }

)



