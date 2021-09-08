class Response {
  static SUCCESS (message = '', data = null) {
    return {
      code: 200,
      data: {
        result: true,
        message,
        data
      }
    }
  }

  static ERROR (code = 500, message = '', data = null) {
    return {
      code,
      data: {
        result: false,
        message,
        data
      }
    }
  }

  static WARN (code = 400, message = '', data = null) {
    return {
      code,
      data: {
        result: false,
        message,
        data
      }
    }
  }
}

export default Response
