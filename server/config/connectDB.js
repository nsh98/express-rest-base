import CONFIG from './config'
require('dotenv').config()
const { DB_CONFIG } = CONFIG
const knex = require('knex')(DB_CONFIG)

function initialize () {
  require('../db-schemas/user').userModel(knex)
}
initialize()
module.exports = knex
