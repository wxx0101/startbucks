
const user = require('../model/user');
const jwt = require('jsonwebtoken');

/**
 * 
 * @param {*} req 客户端发送的请求数据
 * @param {*} res 发送给客户端数据
 * @param {*} next 执行下一个中间件
 */
const info = (req, res, next) => {
  console.log(req.info);
  res.json({
    code: 1,
    data: req.info
  })
}

const register = async (req, res, next) => {
  const {phone, password} = req.body

  if (phone && password) {
    try {
      await user.insert(phone, password)
      res.json({
        code: 1,
        message: '注册成功'
      })
    } catch (e) {
      res.status(422).json({
        name: 'ValidateFail',
        message: '注册失败',
        code: 0
      })
    }
  } else {
    res.status(422).json({
      name: 'ValidateFail',
      message: '参数不完整',
      code: 0
    })
  }
}

const login = async (req, res, next) => {
  const {phone, password} = req.body;
  try {
    const data = await user.find(phone, password)
    if (Object.keys(data).length <= 0) {
      res.status(422).json({
        code: 0,
        name: 'ValidateFail',
        message: '用户名密码错误'
      })
    } else {
      const token = jwt.sign({
        ...data,
        exp: (+new Date() ) + 1000,
      }, 'liuyu123456')
      res.json({
        code: 1,
        message: '登录成功',
        token: token
      })
    }
  } catch (e) {
    res.status(422).json({
      code: 0,
      name: 'ValidateFail',
      message: '用户名密码错误'
    })
  }
}

module.exports = {
  info,
  register,
  login
}