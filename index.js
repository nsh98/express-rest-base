import express from 'express'
import * as path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
// Connect DB
import Connect from './server/config/connect'

import indexRouter from './server/routes/index'
import usersRouter from './server/routes/users'

// set up dependencies
const app = express()
Connect()
require('dotenv').config()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'server/public')))

// HOST + PORT
const host = process.env.HOST
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening at ${host}:${port}`)
})

// Middleware

// Route
app.use('/', indexRouter)
app.use('/users', usersRouter)
