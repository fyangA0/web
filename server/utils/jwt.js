const jwt = require('jsonwebtoken')
const config = require('../config/auth')
const { Unauthorized } = require('./errors')

const generate = (user) => {
  return jwt.sign(
    {
      id: user.id
    },
    config.secret,
    { issuer: config.issuer, expiresIn: config.expiresIn }
  )
}

const verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secret, { issuer: config.issuer }, (e, payload) => {
      if (!e && payload.exp * 1000 > Date.now()) {
        resolve(payload)
      } else {
        reject(new Unauthorized('未登陆'))
      }
    })
  })
}

const refresh = (req) => {
  const token = getToken(req)
  return token ? verify(token).then((payload) => {
    delete payload.iat
    delete payload.exp
    return generate(payload)
  }) : Promise.reject(new Unauthorized('未登陆'))
}

const getToken = (req) => {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')

  return bearer == 'Bearer' && token ? token : ''
}

module.exports = {
  generate,
  verify,
  refresh,
  getToken
}
