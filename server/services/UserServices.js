import db from '../config/connectDB'
import response from '../utils/response'

class UserServices {
  static async getOneUser (id) {
    try {
      const connection = db('user')
      const users = await connection.select().where({ id, is_delete: 0 })
      return response.SUCCESS('get success', users)
    } catch (error) {
      return response.ERROR(500, error.message)
    }
  }
}

export default UserServices
