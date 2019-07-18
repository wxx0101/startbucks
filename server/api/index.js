var express = require('express');
var router = express.Router();
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('目录')
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    // console.log('文件名', file)
    const fileName = file.originalname.split('.')
    cb(null,'img-' + Date.now() + '.' +fileName[1])
  }
})
var upload = multer({ storage })


const userController = require('./controller/user')
const taskController = require('./controller/task')
const baseController = require('./controller/base')
const checkLogin = require('./middleware/checkLogin')
/* GET home page. */
router.get('/articles', function(req, res, next) {
  res.json({
    code: 1,
    data: [
      {title: '文章'},
      {title: '文章'},
      {title: '文章'},
      {title: '文章'},
      {title: '文章'}
    ]
  })
});

router.get('/user/info', checkLogin, userController.info)
router.post('/register', userController.register)
router.post('/login', userController.login)

// 任务相关
router.get('/task/list', taskController.list)
router.post('/apply/overtime', checkLogin, taskController.overtime)
router.get('/apply/overtime', checkLogin, taskController.overtimeDetail)
router.post('/apply/vacation', checkLogin, taskController.vacation)
router.get('/apply/vacation', checkLogin, taskController.vacationDetail)
router.post('/task/approval', checkLogin, taskController.approval)
router.get('/task/history', checkLogin, taskController.history)

// 公共接口
router.post('/upload', upload.single('file'), baseController.upload)

/**
 * mvc (model view c)
 * 
 */

module.exports = router;
