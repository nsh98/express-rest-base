import ajvInstance from '../../utils/ajv'
import user from '../../validate-schemas/user'

const getOneUser = {
  type: 'object',
  required: ['id'],
  properties: {
    id: user.id
  },
  errorMessage: {
    required: {
      id: 'id is required'
    }
  },
  additionalProperties: false
}

const getOneUserSchema = ajvInstance.compile(getOneUser)

export {
  getOneUserSchema
}
