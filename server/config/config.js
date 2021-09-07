require('dotenv').config()

const CONFIG = {
  DB_CONFIG: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMAS
    },
    pool: { min: 10, max: 150 }
  }
}
export default CONFIG
