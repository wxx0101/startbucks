<template>
  <div class="content">
    <header>
      <h2>
        <b class="iconfont icon-arrow-left" @click="backBtn"></b>
        审批历史
      </h2>
      <div class="logo">
        <div class="box">
          <p>
            <span>
              申请人
              <i>xia</i>
            </span>
            <b>
              部门
              <i>俱乐部</i>
            </b>
          </p>
          <p>
            <span>
              员工职位
              <i>P2</i>
            </span>
            <b>
              员工职位
              <i>06060606</i>
            </b>
          </p>
        </div>
      </div>
    </header>
    <main>
      <dl v-for="(item,index) in dataList" :key="index">
        <dt>
          <img :src="item.avatar" alt>
        </dt>
        <dd>
          <p>{{item.nickname}}</p>
          <p>{{item.phone}}</p>
          <b>{{item.remark}}</b>
        </dd>
      </dl>
    </main>
  </div>
</template>
<script>
import api from "../api/index";
import request from "../utils/request";

export default {
  props: {
    code: String
  },
  components: {},
  data() {
    return {
      dataList: []
    };
  },
  computed: {},
  methods: {
    backBtn() {
      this.$router.back();
    }
  },
  created() {
    let code = this.code;
    api
      .taskHistory({
        params: {
          applicationNumber: code
        }
      })
      .then(res => {
        this.dataList = res.data;
      });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../utils/scss/common.scss";

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: pxTorem(45px);
    background: green;
    font-size: pxTorem(30px);
    h2 {
      width: 100%;
      height: 100%;
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
    .logo {
      width: 100%;
      height: pxTorem(110px);
      background: green;
      border-radius: 0 0 60px 60px;
      position: relative;
      .box {
        width: 90%;
        height: pxTorem(100px);
        background: #fff;
        position: absolute;
        bottom: -20%;
        left: 5%;
        box-shadow: 0 0 10px 5px #ccc;
        font-size: pxTorem(14px);
        p {
          display: flex;
          height: 50%;
          color: #666;
          span {
            flex: 5;
            display: flex;
            align-items: center;
            padding-left: 5%;
            i {
              color: #333;
              width: 50%;
            }
          }
          b {
            flex: 5;
            display: flex;
            align-items: center;
            padding-left: 5%;
            i {
              color: #333;
              width: 50%;
            }
          }
        }
      }
    }
  }
  main {
    flex: 1;
    overflow: auto;
    margin-top: 35%;
    dl {
      width: 100%;
      height: 160px;
      display: flex;
      margin: 5% 0;
      dt {
        flex: 2.6;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        flex: 7;
        display: flex;
        flex-direction: column;
        p {
          flex: 2.6;
          border: 1pxx solid #ccc;
          padding-left: 3%;
        }
        p:nth-child(1) {
          display: flex;
          justify-content: flex-start;
          padding: 3%;
        }
        b {
          flex: 3;
          width: 80%;
          height: 30px;
          background: #eee;
          margin: 3%;
          display: flex;
          align-items: center;
          padding-left: 3%;
          color: #666;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>