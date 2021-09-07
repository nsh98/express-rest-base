import express from 'express'
import * as path from 'path'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import usersRouter from './server/routes/users'

// set up dependencies
const app = express()
require('dotenv').config()

// Middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'server/public')))
app.use(helmet())

// HOST + PORT
const host = process.env.HOST
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is listening on ${host}:${port}`)
})

// Route
app.use('/user', usersRouter)
