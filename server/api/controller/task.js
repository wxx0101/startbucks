

const apply = require('../model/apply');
const task = require('../model/task');

/**
 * 任务列表
 * @param {*} req 客户端发送的请求数据
 * @param {*} res 发送给客户端数据
 * @param {*} next 执行下一个中间件
 */
const list = async (req, res, next) => {
  const {type, page, pageSize, status, ...order} = req.query

  const list = await task.select({
    type, page, pageSize, status, order
  })

  const data = {
    code: 1,
    data: list
  }
  res.send(data)
}

const overtime = async (req, res, next) => {
  const data = req.body;
  data.uid = req.info.uid;
  data.annex = JSON.stringify(data.annex)
  try {
    await apply.insertOvertime(data)

    res.send({
      code: 1,
      msg: '提交成功'
    })
  } catch (e) {
    res.status(422).send({
      code: 1,
      msg: '提交失败'
    })
  }
}

const overtimeDetail = async (req, res, next) => {
  const {applicationNumber} = req.query;
  const detail = await apply.findOvertime(applicationNumber)

  res.send({
    code: 1,
    data: detail
  })
}

const vacation = async (req, res, next) => {
  const data = req.body;
  data.uid = req.info.uid;
  data.annex = JSON.stringify(data.annex)
  // try {
    await apply.insertVacation(data)

    res.send({
      code: 1,
      msg: '提交成功'
    })
  // } catch (e) {
  //   res.status(422).send({
  //     code: 1,
  //     msg: '提交失败'
  //   })
  // }
}

const vacationDetail = async (req, res, next) => {
  const {applicationNumber} = req.query;
  const detail = await apply.findVacation(applicationNumber)

  res.send({
    code: 1,
    data: detail
  })
}

const approval = async (req, res, next) => {
  const userInfo = req.info
  const {
    remark,
    status,
    type,
    applicationNumber
  } = req.body;

  const auditor = {
    avatar: userInfo.avatar,
    nickname: userInfo.nickname,
    email: userInfo.email,
    phone: userInfo.phone,
    wechat: userInfo.wechat,
    remark: remark,
    status: status
  }
  const detail = await task.approval(auditor, type, applicationNumber)

  res.send({
    code: 1,
    data: detail
  })
}

const history = async (req, res, next) => {
  const {applicationNumber} = req.query
  const historyData = await task.history(applicationNumber)

  res.send({
    code: 1,
    data: historyData
  })
}

module.exports = {
  list,
  overtime,
  overtimeDetail,
  vacation,
  vacationDetail,
  approval,
  history
}