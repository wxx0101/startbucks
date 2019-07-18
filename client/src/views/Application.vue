<template>
  <div class="wrap">
    <div class="top">
      <h2>
        <b class="iconfont icon-arrow-left" @click="backBtn"></b>
        {{types=="overtime" ? "加班申请表" : "休假申请表"}}
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
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>申请信息</li>
        <li>
          <span>{{types=="overtime"?"加班日期":"休假日期"}}</span>
          <b>
            <div class="block">
              <el-date-picker v-model="val" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </b>
        </li>
        <li>
          <span>{{types=="overtime"?"加班类型":"休假类型"}}</span>
          <!-- <b>{{types=="overtime" ? "加班" : "休假"}}</b> -->
          <b><select name="select" id="select" v-model="option" @change="selectBtn">
              <option value="1">加班</option>
              <option value="2">休假</option>
              <option value="3">事假</option>
          </select></b>
        </li>
        <li>
          <span>{{types=="overtime"?"加班起始时间":"休假起始时间"}}</span>
          <b>
            <el-time-picker
              arrow-control
              v-model="value1"
              :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
                }"
              @change="getDate"
              placeholder="任意时间点"
            ></el-time-picker>
          </b>
        </li>
        <li>
          <span>{{types=="overtime"?"加班截止时间":"休假截止时间"}}</span>
          <b>
            <el-time-picker
              arrow-control
              v-model="value2"
              :picker-options="{
                selectableRange: '00:00:00 - 23:59:00'
                }"
              @change="getDate"
              placeholder="任意时间点"
            ></el-time-picker>
          </b>
        </li>
        <li>
          <span>共计时数</span>
          <b>{{Alltime}}</b>
        </li>
      </ul>
      <ul>
        <li>{{types=="overtime"?"加班事由":"休假事由"}}</li>
        <textarea v-model='textarea' name="text" id="text" cols="20" rows="6"></textarea>
      </ul>
      <ul>
        <li>
          <div>
            <input v-if="open" type="file" @change="changeFile" ref="fileBtn">
            <i>
              <b>+</b> 上传附件
            </i>
          </div>
        </li>
        <div class="imgCon">
          <p v-for="(item,index) in imgArr" :key="index">
            <img :src="'http://localhost:3000/'+item" alt>
          </p>
        </div>
      </ul>
    </div>
    <div class="bottom">
      <span @click="backBtn">取消</span>
      <button @click="submmitBtn">提交</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import api from "../api/index"

export default {
  props: {
    types: String
  },
  components: {},
  data() {
    return {
      dataList: {},
      val: "",
      textarea: "",
      value1: new Date(),
      value2: new Date(),
      imgArr: [],
      Alltime: 0,
      option: 1,
      open: true,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  computed: {
    ...mapState(["applicationData"])
  },
  methods: {
    backBtn() {
      this.$router.back();
    },
    getDate() {
      this.Alltime = (
        (new Date(this.value2) - new Date(this.value1)) /
        3600 /
        1000
      ).toFixed(1);
    },
    changeFile() {
      const file = this.$refs.fileBtn.files[0];
      if (file.size > 1024 * 1024 * 2) {
        alert("图片大小不能超过 2MB!");
        return false;
      }
      if (file.type.indexOf("image") == 0) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let newUrl = reader.result;
          let formdata = new FormData()
          formdata.append("file",file)
          api.commitFiles(formdata).then(res => {
            this.imgArr.push(res.url)
          })
        };
      }
    },
    selectBtn(e){
      this.option  = e.target.value
    },
    submmitBtn(){
      let imgArr = this.imgArr;
      let val = this.val;
      let value1 = this.value1;
      let value2 = this.value2;
      let textarea = this.textarea;
      let option = this.option;
      let type = this.types
      if(val!=""&&value1!=""&&value2!=""&&textarea!=""){
          api.applyOvertime({
                annex: imgArr,
                describe: textarea,
                startTime: value1,
                endTime: value1,
                type: option
            },type).then(res => {
                let {code} = res;
                if(code) {
                  this.backBtn()
                }
          })
      }else{
        alert("不能为空")
      }
      
    }
  },
  watch: {
      imgArr(next){
        if(next.length >= 3){
          alert("最多只能上传3张图片")
          this.open = false;
        }
      }
  },
  created() {
    this.dataList = this.applicationData.length
      ? this.applicationData
      : JSON.parse(window.localStorage.applicationData);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../utils/scss/common";

.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: pxTorem(130px);
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
          select{
            width: pxTorem(100px);
            height: pxTorem(23px);
            font-size: pxTorem(14px);
          }
        }
        p {
          padding: 3%;
          color: #000;
        }
        > div {
          width: 100%;
          height: 100%;
          position: relative;
          input {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
          i {
            position: absolute;
            left: 5%;
            top: 30%;
            font-size: pxTorem(16px);
            b {
              width: pxTorem(20px);
              height: pxTorem(20px);
              color: #fff;
              border-radius: 50%;
              text-align: center;
              line-height: pxTorem(20px);
              background: yellowgreen;
              display: inline-block;
            }
          }
        }
      }
      .imgCon{
        width: 100%;
        p{
          width: 31%;
          height: pxTorem(100px);
          margin: 1%;
          float: left;
          img{
            width: 100%;
            height: 100%
          }
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
      textarea {
        width: 100%;
        font-size: pxTorem(16px);
        padding: 2%;
      }
      .big {
        width: 100%;
        display: flex;
        .imgBox {
          flex: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    ul:nth-last-child(1){
      margin-bottom: pxTorem(15px)
    }
  }
  .bottom {
    width: 100%;
    height: pxTorem(50px);
    background: #fff;
    box-shadow: 0 -5px 10px #999;
    display: flex;
    span {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      color: green;
    }
    button {
      flex: 7;
      background: green;
      color: #fff;
      border: none;
      outline: none;
      font-size: 25px;
    }
  }
}
</style>