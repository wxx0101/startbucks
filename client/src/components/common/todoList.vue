<template>
    <div class="bigBox">
        <ul class="con" v-for="(item,index) in dataList" :key="index" @click="editBtn(item.list_type,item.applicationNumber)">
            <li><span>{{item.applicationNumber}}</span> <span>待确认</span></li>
            <li><p class="left"><span>申请人</span><b>{{item.nickname}}</b></p><p class="right"><span>加班类型</span><b>{{item.list_type==="overtime"?"工作日加班":"休假"}}</b></p></li>
            <li><p class="left"><span>加班日期</span><b>{{getDate(item.create_at)}}</b></p><p class="right"><span>加班时数</span><b>{{getHour(item.create_at,item.endTime)}}时</b></p></li>
        </ul>
        <button @click="btnClick(true)">+发起任务</button>

        <Drag v-if="open" />
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from "vuex"
import Drag from "../Drag"

export default {
    props:{

    },
    components:{
        Drag
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['dataList','open'])
    },
    methods:{
        ...mapMutations(['changeOpen']),
        getDate(startTime){
            let date = new Date(startTime)
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        },
        getHour(startTime,endTime){
            let startDate = new Date(startTime)
            let endDate = new Date(endTime)
            return ((endDate - startDate) / 3600 / 1000).toFixed(1)
        },
        editBtn(types,Code){
            this.$router.push(`/timeEdit/${types}/${Code}`)
        },
        btnClick(flag){
            this.changeOpen(flag)
        }
    },
    created(){
     
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.bigBox{
    width: 100%;
    background: #eee;
    .con{
        width: 100%;
        height: 200px;
        margin-bottom: 2%;
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 5% 0;
        li{
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            display: flex;
            justify-content: space-between;
            span{
                margin: 0 5%;
                color: #666;
                
            }
            .left{
                flex: 5;
                padding: 0 3%;
                display: flex;
                span{
                    flex: 1;
                    color: #666;
                }
                 b{
                     flex: 1;
                    margin-right: 0;
                    display: inline-block;
                }
            }
            .right{
                flex: 5;
                padding: 0 3%;
                display: flex;
                span{
                    flex: 1;
                    color: #666;
                }
                 b{
                     flex: 1;
                    margin-right: 0;
                    display: inline-block;
                }
            }
        }
    }
    button{
        width: 250px;
        height: 75px;
        background: green;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 50px;
        position: fixed;
        right: 5%;
        bottom: 5%;
        font-size: 25px;
    }
}

</style>