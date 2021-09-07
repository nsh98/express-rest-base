import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import ajvErrors from 'ajv-errors'

const ajvInstance = new Ajv({ allErrors: true })
addFormats(ajvInstance)
ajvErrors(ajvInstance)

export default ajvInstance
