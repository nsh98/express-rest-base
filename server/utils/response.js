class Response {
  static SUCCESS (message = '', payload = null, code = 200) {
    return {
      code,
      data: {
        message,
        payload
      }
    }
  }

  static ERROR (code = 500, message = '', payload = null) {
    return {
      code,
      data: {
        message,
        payload
      }
    }
  }

  static WARN (code = 400, message = '', payload = null) {
    return {
      code,
      data: {
        message,
        payload
      }
    }
  }
}

export default Response
