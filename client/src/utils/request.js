import axios from "axios"
import router from "../router/index"
import { promises } from "fs";

const request = axios.create({
    baseURL: "http://169.254.126.4:3000"
})

request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem("token")
        }
    }
},(error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data
},(error) => {
    // console.log(error.response)
    const status = error.response.status
    if(status > 400){
        switch(status){
            case 401: 
                router.push("/Login")
                break;
            case 403:
                alert("没有权限")
                break;
            case 404: 
                alert("找不到页面")
                break
            case 422:
                alert(error.response.data.message)
                break
        }
    }
    return Promise.reject(error)
}) 

export default request;

// 13683599380