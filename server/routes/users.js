import express from 'express'
import UsersController from '../controllers/UserControllers'
import { validator } from '../middlewares'
import getOneUserSchema from '../validate-schemas/user'

const router = express.Router()

router.post('/get-one', validator(getOneUserSchema), UsersController.getOneUser)

export default router
