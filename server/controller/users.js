const fs = require('fs')
const path = require('path')
const jwt = require('../utils/jwt')
const { asyncCatchErrors, BadRequest, NotFound } = require('../utils/errors')


const utils = {
  getUsers() {
    let users = []

    try {
      const data = fs.readFileSync(path.resolve(__dirname, '../users.json'), 'utf-8')
      
      users = JSON.parse(data)
    } catch(e) {
      console.log(e)
    }

    return users
  },
  createUser(user) {
    const users = this.getUsers()
    const id = Math.max(...users.map(({ id}) => id))

    Object.assign(user, { id: id + 1})

    users.push(user)

    fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(users, null, '\t'))

    return user
  }
}

const usersService = {
  findOne(condi) {
    if (condi) {
      const users = utils.getUsers()
      const user = users.find(user => {
        for (let key in condi) {
          if (user[key] !== condi[key]) {
            return false
          }
        }

        return true
      })

      return user
    }

    return null
  }
}


module.exports = {
  signin: asyncCatchErrors(async(req, res) => {
    const { userName, password } = req.body
    const user = usersService.findOne({ userName })

    if (user) {
      if (user.password !== password) {        
        throw new BadRequest('密码错误')
      }
    } else {
      throw new NotFound('用户不存在')
    }

    const token = jwt.generate(user)

    res.send({ token, user }) 

  }),
  getUserById: asyncCatchErrors(async(req, res) => {
    const { userId } = req.params

    const user = usersService.findOne({ id: userId })

    res.send(user)
  }),
  getUserByToken: asyncCatchErrors(async(req, res) => {
    const token = await jwt.getToken(req)
    const payload = await jwt.verify(token)
    const user = usersService.findOne({ id: payload.id })

    res.send(user)
  })
}