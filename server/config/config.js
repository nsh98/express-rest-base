const CONFIG = {
  DB_CONFIG: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Ab@123456',
      database: 'ssv'
    },
    pool: { min: 10, max: 150 }
  }
}

export default CONFIG
