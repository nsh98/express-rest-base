import db from '../../config/connectDB'
import response from '../../utils/response'
import LOGGER from '../../utils/logger'

class UserServices {
  static async getOneUser (id) {
    try {
      const connection = db('user')
      const users = await connection.select().where({ id, is_delete: 0 })
      return response.SUCCESS('get success', users)
    } catch (error) {
      LOGGER.APP.error(error.stack)
      return response.ERROR(500, error.message)
    }
  }
}

export default UserServices
