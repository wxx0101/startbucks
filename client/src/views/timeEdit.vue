<template>
  <div class="editBox">
    <div class="top">
      <h2>
        <b class="iconfont icon-arrow-left" @click="backBtn"></b>
        {{dataList.list_type=="overtime"?"加班详情":"休假详情"}}
      </h2>
      <div class="con">
        <div class="img-box">
          <img :src="dataList.avatar" alt>
        </div>
        <div class="right">
          <p>
            申请人姓名:
            <b>{{dataList.nickname}}</b>
          </p>
          <p>
            直接主管：
            <b>霞姐姐</b>
          </p>
          <p>
            申请单号：
            <b>{{dataList.applicationNumber}}</b>
          </p>
          <p>
            发起时间：
            <b>{{getStartTime(dataList.startTime)}}</b>
          </p>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>申请信息</li>
        <li>
          <span>{{dataList.list_type=="overtime"?"加班日期":"休假日期"}}</span>
          <b>{{getCreateTime(dataList.create_at)}}</b>
        </li>
        <li>
          <span>{{dataList.list_type=="overtime"?"加班类型":"休假类型"}}</span>
          <b>{{dataList.list_type=="overtime" ? "加班" : "休假"}}</b>
        </li>
        <li>
          <span>{{dataList.list_type=="overtime"?"加班起始时间":"休假起始时间"}}</span>
          <b>{{getStartTime(dataList.startTime)}}</b>
        </li>
        <li>
          <span>{{dataList.list_type=="overtime"?"加班截止时间":"休假截止时间"}}</span>
          <b>{{getEndTime(dataList.endTime)}}</b>
        </li>
        <li>
          <span>共计时数</span>
          <b>{{getHours(dataList.startTime,dataList.endTime)}}</b>
        </li>
      </ul>
      <ul>
        <li>{{dataList.list_type=="overtime"?"加班事由":"休假事由"}}</li>
        <li>
          <p>{{dataList.describes}}</p>
        </li>
      </ul>
      <ul>
        <li>附件</li>
        <div class="big">
          <div class="imgBox" v-for="(item,index) in dataList.annex" :key="index">
            <img :src="'http://localhost:3000'+item" alt>
          </div>
        </div>
      </ul>
    </div>
    <div class="bottom">
      <span @click="historyBth">审批历史</span>
      <button @click="backBtn">返回</button>
      <button>同意</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import api from "../api/index";

export default {
  components: {},
  data() {
    return {
      dataList: {}
    };
  },
  computed: {},
  methods: {
    backBtn() {
      this.$router.back();
    },
    getStartTime(startTime) {
      let date = new Date(startTime);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    getCreateTime(create_at) {
      let date = new Date(create_at);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    getStartTime(startTime) {
      return new Date(startTime).toLocaleTimeString();
    },
    getEndTime(endTime) {
      return new Date(endTime).toLocaleTimeString();
    },
    getHours(startTime, endTime) {
      let startTimeDate = new Date(startTime);
      let endTimeDate = new Date(endTime);
      return ((startTimeDate - endTimeDate) / 3600 / 1000).toFixed(2);
    },
    historyBth(){
        let code = this.dataList.applicationNumber
        this.$router.push(`/historyCon/${code}`)
    }
  },
  props: {
    id: String,
    types: String
  },
  created() {
    let id = this.id;
    let types = this.types;
    api.TimeTypes({ params: { applicationNumber: id } }, types).then(res => {
      this.dataList = res.data;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../utils/scss/common";

.editBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: pxTorem(150px);
    border-radius: 0 0 13% 13%;
    background: green;
    display: flex;
    flex-direction: column;
    h2 {
      width: 100%;
      height: pxTorem(50px);
      font-size: pxTorem(20px);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: relative;
      b {
        position: absolute;
        left: 5%;
      }
    }
    .con {
      flex: 1;
      display: flex;
      margin-top: 2%;
      .img-box {
        width: pxTorem(65px);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        p {
          flex: 1;
          padding-left: 6%;
          color: #ccc;
          font-size: pxTorem(12px);
          b {
            padding-left: 10%;
            color: #eee;
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    background: #eee;
    overflow: auto;
    ul {
      width: 92%;
      background: #fff;
      z-index: 1000;
      margin: 0 4%;
      border-radius: 15px;
      margin-top: 5%;
      li {
        width: 100%;
        height: pxTorem(40px);
        color: #ccc;
        display: flex;
        span {
          flex: 5;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 6%;
        }
        b {
          flex: 5;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: 6%;
          color: #333;
        }
        p {
          padding: 3%;
          color: #000;
        }
      }
      li:nth-child(1) {
        width: 100%;
        height: pxTorem(45px);
        border-bottom: 1px solid #eee;
        color: #000;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 3%;
      }
      .big {
        width: 100%;

        display: flex;
        .imgBox {
          width: 33%;
          margin: 1%;
          height: pxTorem(150px);
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: pxTorem(50px);
    background: #fff;
    box-shadow: 0 -5px 10px #999;
    display: flex;
    span {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      flex: 4;
      background: #333;
      color: #ccc;
      border: none;
      outline: none;
      font-size: 25px;
    }
    button:nth-child(3) {
      background: green;
      color: #ccc;
    }
  }
}
</style>