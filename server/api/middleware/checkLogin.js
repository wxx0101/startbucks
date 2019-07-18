const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    // var decoded = jwt.decode(req.headers.token, 'liuyu123456');
    jwt.verify(req.headers.token, 'liuyu123456', (err, decoded) => {
      if (!err) {
        req.info = decoded
        next()
      } else {
        res.status(401).json({
          name: 'Unauthorized',
          message: '用户未登录',
          code: 0
        })
      }
    });
    
  } catch (e) {
    res.status(401).json({
      name: 'Unauthorized',
      message: '用户未登录',
      code: 0
    })
  }
}