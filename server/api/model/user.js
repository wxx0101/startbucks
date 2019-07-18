const db = require('../../db')
let node_uid = require('node-uid')

const insert = (phone, password) => {
  return new Promise((resolve, reject) => {
    db.query('insert into user (uid, phone, password) values (?, ?, ?)', [
      node_uid(), phone, password
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

module.exports = {
  insert,
  find
}