const db = require('../../db')
const utils = require('../../utils/utils')
const node_uid = require('node-uid')

const insertOvertime = ({
  uid, type, startTime, endTime, describe, annex
}) => {
  return new Promise((resolve, reject) => {
    console.log(describe)
    db.query('insert into overtime (applicationNumber, uid, type, startTime, endTime, describes, annex, create_at) values (?, ?, ?, ?, ?, ?, ?, ?)', [
      node_uid(12), uid, type, startTime, endTime, describe, annex, new Date()
    ], (error, res) => {
      if (!error) {
        resolve(res)
      } else {
        reject(error)
      }
    })
  })
}

const insertVacation = ({
  uid, type, startTime, endTime, describe, annex
}) => {
  return new Promise((resolve, reject) => {
    console.log(describe)
    db.query('insert into vacation (applicationNumber, uid, type, startTime, endTime, describes, annex, create_at) values (?, ?, ?, ?, ?, ?, ?, ?)', [
      node_uid(12), uid, type, startTime, endTime, describe, annex, new Date()
    ], (error, res) => {
      if (!error) {
        resolve(res)
      } else {
        reject(error)
      }
    })
  })
}

const find = (phone, password) => {
  return new Promise((resolve, reject) => {
    db.query('select * from user where phone=? and password=?', [
      phone, password
    ], (error, res) => {
      if (!error) {
        console.log(phone, password)
        resolve({...res[0]})
      } else {
        reject(error)
      }
    })
  })
}

const findOvertime = (applicationNumber) => {
  return new Promise((resolve, reject) => {
    db.query('select * from overtime left join user on overtime.uid=user.uid where applicationNumber=?', [
      applicationNumber
    ], (error, res) => {
      if (!error) {
        resolve(utils.sqlListToObject(res)[0])
      } else {
        reject(error)
      }
    })
  })
}

const findVacation = (applicationNumber) => {
  console.log(applicationNumber)
  return new Promise((resolve, reject) => {
    db.query('select * from vacation left join user on vacation.uid=user.uid where applicationNumber=?', [
      applicationNumber
    ], (error, res) => {
      if (!error) {
        resolve(utils.sqlListToObject(res)[0])
      } else {
        reject(error)
      }
    })
  })
}

module.exports = {
  insertOvertime,
  find,
  findOvertime,
  insertVacation,
  findVacation
}