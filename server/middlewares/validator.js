const validate = (ajvValidate) => {
  return (req, res, next) => {
    const valid = ajvValidate(req.body)
    if (!valid) {
      const errors = ajvValidate.errors
      const payload = []
      const message = 'validation error'
      errors.forEach(error => {
        payload.push({
          dataPath: error.instancePath,
          error: error.message
        })
      })
      return res.status(400).json({ message, payload })
    }
    next()
  }
}

export default validate
