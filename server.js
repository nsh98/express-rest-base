import app from './app'
import http from 'http'

// HOST + PORT
const host = process.env.HOST
const port = process.env.PORT

// Create HTTP server.
const server = http.createServer(app)
server.listen(port)
console.log(`⚡ Server start at ${host}:${port}`)
