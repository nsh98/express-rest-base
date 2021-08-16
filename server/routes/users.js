import express from 'express'
import UsersController from '../controllers/UserControllers'
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/get-all', UsersController.getAllUsers)

export default router
