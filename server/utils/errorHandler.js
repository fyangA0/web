const errors = require('./errors')

module.exports = (err, req, res, next) => {
  if (err instanceof errors.BadRequest) {
    return res.status(400).json({
      message: err.message || 'BadRequest'
    })
  }

  if (err instanceof errors.ValueError) {
    return res.status(400).json({
      message: err.message
    })
  }

  if (err instanceof errors.Unauthorized) {
    return res.status(401).json({
      message: err.message || 'Unauthorized'
    })
  }

  if (err instanceof errors.Forbidden) {
    return res.status(403).json({
      message: err.message || 'Forbidden'
    })
  }

  if (err instanceof errors.NotFound) {
    return res.status(404).json({
      message: err.message || 'Not Found'
    })
  }

  if (err instanceof errors.AlreadyExist) {
    return res.status(409).json({
      message: err.message,
      code: err.code
    })
  }

  res.status(500).json({
    message: err.message
  })
}
