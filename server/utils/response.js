class Response {
  static SUCCESS (message = '', data = null, code = 200) {
    return {
      code,
      result: true,
      message,
      data
    }
  }

  static ERROR (code = 500, message = '', data = null) {
    return {
      code,
      result: false,
      message,
      data
    }
  }

  static WARN (code = 400, message = '', data = null) {
    return {
      code,
      result: false,
      message,
      data
    }
  }
}

export default Response
