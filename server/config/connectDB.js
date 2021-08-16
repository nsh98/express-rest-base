import CONFIG from './config'
const { DB_CONFIG } = CONFIG
export default require('knex')(DB_CONFIG)
