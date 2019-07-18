<template>
  <div class="registerBox">
    <h2>注册</h2>
    <p>
      用户名：
      <input type="tel" placeholder="请输入用户名" v-model="phone">
    </p>
    <p>
      密码：
      <input type="password" placeholder="请输入密码" v-model="pwd">
    </p>
    <p>
      确认密码：
      <input type="password" placeholder="请再次输入密码" v-model="pwd">
    </p>
    <p>
      <button @click="btnLogin">注册</button>
    </p>
    <b>
      <router-link to="/Login">已有账号,直接登录</router-link>
    </b>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../utils/scss/common.scss";

.registerBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h2{
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
  p{
    width: 100%;
    height: pxTorem(60px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
    input{
      width: 70%;
      height: 70%;
      border-bottom: 1px solid #ccc;
    }
    button{
        width: 80%;
        height: 70%;
        font-size: 30px;
        outline: none;
        background: green;
        color: #fff;
        border-radius: 15px;
        border: none;
    }
  }
  b{
    margin: 0 auto;
  }
}
</style>