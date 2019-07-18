import Vue from "vue"
import Vuex from "vuex"
import api from "../api/index"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataList: [],
        type: null,
        status: 0,
        open: false,
        applicationData: {}
    },
    getters: {

    },
    mutations: {
        getData(state,data){
            state.dataList = data
        },
        getType(state,type){
            state.type = type
        },
        getStatus(state,status){
            state.status = status
        },
        changeOpen(state,flag){
            state.open = flag
        },
        getapplicationData(state,data){
            state.applicationData = data
        }
    },
    actions: {
        getTaskList({commit,state}){
            api.taskList({params:{type:state.type,status:state.status}}).then(res => {
                let {data} = res
                commit("getData",data)
            })
        }
    }
})