import ajvInstance from '../../utils/ajv'

const getOneUserSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'integer',
      minimum: 1,
      errorMessage: {
        _: 'wrong data in field id'
      }
    }
  },
  errorMessage: {
    required: {
      id: 'id is required'
    }
  },
  additionalProperties: false
}

export default ajvInstance.compile(getOneUserSchema)
