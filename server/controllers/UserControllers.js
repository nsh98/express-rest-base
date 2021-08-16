import UserServices from '../services/UserServices'

exports.getAllUsers = async (req, res) => {
  const response = await UserServices.getAllUsers()
  return res.send(response)
}
