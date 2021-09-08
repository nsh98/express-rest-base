import UserServices from './services'
import express from 'express'
import { validator } from '../../middlewares'
import { getOneUserSchema } from './schemas'

const getOneUserHandler = async (req, res) => {
  const { id } = req.body
  const response = await UserServices.getOneUser(id)
  return res.status(response.code).send(response.data)
}

const router = express.Router()

router.post('/get-one', validator(getOneUserSchema), getOneUserHandler)

export default router
