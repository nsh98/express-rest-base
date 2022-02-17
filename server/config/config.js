import LOGGER from '../utils/logger'
require('dotenv').config()

const CONFIG = {
  DB_CONFIG: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMAS
    },
    pool: { min: 10, max: 150 },
    log: {
      warn (message) {
        LOGGER.DB.query(message)
      },
      error (message) {
        LOGGER.DB.error(message).bind(LOGGER.DB)
      },
      deprecate (message) {
        LOGGER.DB.query(message)
      },
      debug (message) {
        LOGGER.DB.query(message)
      }
    }
  }
}
export default CONFIG
