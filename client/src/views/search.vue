<template>
  <div class="searchBox">
    <div class="top">
      <i class="iconfont icon-arrow-left" @click="backBtn"></i>
      <input type="text" placeholder="搜索">
      <span>取消</span>
    </div>
    <div class="content">
      <h2>搜索指定内容</h2>
      <ul>
        <li>加班类型</li>
        <li>发起时间</li>
        <li>加班日期</li>
        <li>申请单号</li>
        <li>加班时数</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    backBtn() {
      this.$router.back();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../utils/scss/common.scss";

.searchBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3%;
    i{
        width: 10%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: pxTorem(18px);
    }
    input {
      width: 80%;
      height: 60%;
      padding-left: 2%;
      background: #eee;
    }
    span {
      width: 20%;
      height: 60%;
      color: green;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .content {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    h2 {
      width: 100%;
      height: pxTorem(50px);
      margin-top: 15%;
      color: #666;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: pxTorem(18px);
    }
    ul {
      width: 100%;
      li {
        width: 29%;
        height: pxTorem(40px);
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        color: green;
        margin: 2%;
        font-size: pxTorem(16px);
      }
      li:nth-child(4) {
        margin-left: 15%;
      }
    }
  }
}
</style>