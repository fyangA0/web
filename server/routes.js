const { Router } = require('express')
const router = Router()
const needAuth = require('./middleware/auth')
const usersController = require('./controller/users')

// 用户登录
router.post('/users/', usersController.signin)

// 通过用户id获取用户信息
router.get('/users/:userId', needAuth, usersController.getUserById)

// 通过token获取用户信息
router.get('/auth', needAuth, usersController.getUserByToken)

module.exports = router