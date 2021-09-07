const jwt = require('jsonwebtoken')
require('dotenv').config()

function auth (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.sendStatus(401)
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
    const userInfo = user.user
    req.user = userInfo
    next()
  })
}

export default auth
