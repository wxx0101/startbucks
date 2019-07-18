import axios from "axios"
import request from "../utils/request"


const isLogin = () => {
    return request.get("/api/user/info")
}
const Login = (data) => {
    return request.post("/api/login",data)
}
const TimeTypes = (data,types) => {
    return  request.get(`/api/apply/${types}`,data)
}
const taskList = (data) => {
    return request.get("/api/task/list",data)
}
const commitFiles = (data) => {
    return request.post("/api/upload",data)
}
const applyOvertime = (data,type) => {
    return request.post(`/api/apply/${type}`,data)
}
const taskHistory = (data) => {
    return request.get("/api/task/history",data)
}

export default {
    isLogin,
    Login,
    taskList,
    TimeTypes,
    commitFiles,
    applyOvertime,
    taskHistory
}