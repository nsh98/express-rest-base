import UserServices from '../services/UserServices'

exports.getOneUser = async (req, res) => {
  const { id } = req.body
  const response = await UserServices.getOneUser(id)
  return res.status(response.code).send(response.data)
}
