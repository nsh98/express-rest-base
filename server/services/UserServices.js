import db from '../config/connectDB'

class UserServices {
  static async getAllUsers () {
    try {
      const connection = db('employees')
      const users = await connection.select()
      return users
    } catch (error) {
      return error.message
    }
  }
}

export default UserServices
