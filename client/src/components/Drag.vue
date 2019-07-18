<template>
    <div class="maskBox" @click.self="maskClick(false)">
        <div class="box">
            <button v-for="(item,index) in btnArr" :key="index" @click="eventBtn(index)">{{item}}</button>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            btnArr: ["加班","休假"]
        }
    },
    computed:{
        
    }, 
    methods:{
        ...mapMutations(['changeOpen']),
        maskClick(flag){
            this.changeOpen(flag)
        },
        eventBtn(index){
            let types = index==0 ? "overtime" : "vacation"
            this.$router.push(`/Application/${types}`)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

.maskBox{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 0;
    top: 0;
    .box{
        width: 100%;
        height: 150px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            outline: none;
            border: none;
            font-size: 25px;
            background: orange;
            color: purple;
        }
        button:nth-child(2){
            background: palegreen;
        }
    }
}
</style>