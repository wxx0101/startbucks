const db = require('../../db')
const apply = require('./apply')
const utils = require('../../utils/utils')
const select = ({
  type = 'overtime',
  page = 1,
  pageSize = 10,
  status = 0,
  order = {}
}) => {
  let sql = `
    select 
      ${type}.*, user.nickname 
    from 
      ${type} 
    left join 
      user 
    on 
      ${type}.uid = user.uid 
    where ${type}.status='${status}' 
    `;

  if (Object.keys(order).length >= 1) {
    sql += 'order by'
    for (let key in order) {
      sql += ` ${type}.${key} ${order[key] == 1 ? 'DESC' : 'ASC'} , `
    }
    console.log(sql.length)
    sql = sql.substr(0, sql.length - 2)
  }

  sql += `limit ${(page-1) * pageSize},${pageSize}`
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.query(sql, [], (error, res) => {
      if (!error) {
        resolve(utils.sqlListToObject(res))
      } else {
        reject(error)
      }
    })
  })
}

const approval = async (auditor, type, applicationNumber) => {
  let applyDetail = {}
  if (type === 'overtime') {
    applyDetail = await apply.findOvertime(applicationNumber)
  } else {
    applyDetail = await apply.findVacation(applicationNumber)
  }
  const auditorData = applyDetail.auditor || [];
  auditorData.push(auditor)
  let status = auditor.status
  if (auditorData.length >= 4) {
    status = 2
  }
  const sql = `update ${type} set auditor='${JSON.stringify(auditorData)}', status='${status}' where applicationNumber='${applicationNumber}'`
  return new Promise((resolve, reject) => {
    db.query(sql, [], (error, res) => {
      if (!error) {
        resolve(res)
      } else {
        reject(error)
      }
    })
  })
}

const history = async (applicationNumber) => {
  
  const sql = `
    select * from overtime where applicationNumber='${applicationNumber}' 
    union 
    select * from vacation where applicationNumber='${applicationNumber}' 
  `
console.log(sql)
  return new Promise((resolve, reject) => {
    db.query(sql, [], (error, res) => {
      if (!error) {
        resolve(utils.sqlListToObject(res)[0].auditor)
      } else {
        reject(error)
      }
    })
  })
}

module.exports = {
  select,
  approval,
  history
}