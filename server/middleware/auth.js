const jwt = require('../utils/jwt')
const { asyncCatchErrors, Unauthorized } = require('../utils/errors')

module.exports = asyncCatchErrors(async(req, res, next) => {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')

  if (bearer == 'Bearer' && token) {
    try {
      const payload = await jwt.verify(token)

      next()
    } catch (e) {
      throw new Unauthorized()
    }
  } else {
    throw new Unauthorized()
  }
})
