import { loggers, transports, format } from 'winston'
import path from 'path'
require('dotenv').config()

const logPath = process.env.LOG_PATH

const appFormatter = format
  .combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf((info) => {
      return `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    }))

const httpFormatter = format.combine(
  format.printf(
    (info) => `[${info.label || ''}]\t${info.timestamp}\t[${info.level || ''}]\t[${info.type || ''}]\t[${info.ip || ''}]\t[${info.method || ''}]\t${info.url || ''}\t[${info.identify || ''}]`
  )
)

const sqlFormatter = format.combine(
  format.printf(
    (info) => `[${info.label || ''}]\t${info.timestamp}\t[${info.level || ''}]\t[${info.type || 'SQL'}]\t${info.message ? JSON.stringify(info.message) : ''}`
  )
)

loggers.add('app', {
  format: format.combine(
    format.label({ label: '10BitP2P' }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    appFormatter
  ),
  transports: [
    new transports.File({
      level: 'error',
      filename: path.resolve(logPath, 'error.log'),
      handleExceptions: true,
      maxsize: 10485760,
      maxFiles: 50
    }),
    new transports.File({
      level: 'info',
      filename: path.resolve(logPath, 'app.log'),
      handleExceptions: true,
      maxsize: 10485760,
      maxFiles: 50
    })
  ]
})

loggers.add('http', {
  format: format.combine(
    format.label({ label: 'HTTP' }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    httpFormatter
  ),
  transports: [
    new transports.File({
      level: 'info',
      filename: path.resolve(logPath, 'http.log'),
      handleExceptions: false,
      maxsize: 10485760,
      maxFiles: 50
    })
  ]
})

loggers.add('db', {
  format: format.combine(
    format.label({ label: 'DATABASE' }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    sqlFormatter
  ),
  transports: [
    new transports.File({
      level: 'error',
      filename: path.resolve(logPath, 'sql_error.log'),
      handleExceptions: false,
      maxsize: 10485760,
      maxFiles: 50
    }),
    new transports.File({
      level: 'info',
      filename: path.resolve(logPath, 'sql_query.log'),
      handleExceptions: false,
      maxsize: 10485760,
      maxFiles: 50
    })
  ]
})

const APP = loggers.get('app')

const HTTP = loggers.get('http')
HTTP.request = async (request) => {
  const data = {
    ...request.body,
    ...request.query,
    ...request.params
  }
  HTTP.info(data, {
    type: 'REQUEST', ip: request.ip, url: request.url, method: request.method, identify: request.user
  })
}

const DB = loggers.get('db')
DB.query = async (data) => {
  DB.info(data, { type: 'SQL' })
}

APP.exitOnError = false
HTTP.exitOnError = false
DB.exitOnError = false

const LOGGER = {
  APP, HTTP, DB
}

export default LOGGER
