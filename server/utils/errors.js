/**
 * Errors and helper functions
 */

const last = (arr = []) => arr[arr.length - 1]
const noop = Function.prototype

const asyncCatchErrors = fn => async(...args) => {
  try {
    await fn.apply(this, args)
  } catch (err) {
    const next = last(args) || noop
    next(err)
  }
}

// 400
class ValueError extends Error {}

// 401
class Unauthorized extends Error {}

// 404
class NotFound extends Error {}

// 400
class BadRequest extends Error {}

// 403
class Forbidden extends Error {}

// 409
class AlreadyExist extends Error {
  constructor(message, code = null) {
    super(message)
    this.code = code
  }
}

module.exports = {
  asyncCatchErrors,
  Unauthorized,
  NotFound,
  ValueError,
  BadRequest,
  Forbidden,
  AlreadyExist
}
