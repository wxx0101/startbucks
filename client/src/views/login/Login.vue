<template>
  <div class="loginBox">
    <h2>登录</h2>
    <p>
      用户名：
      <input type="tel" placeholder="请输入用户名" v-model="phone">
    </p>
    <p>
      密码：
      <input type="password" placeholder="请输入密码" v-model="pwd">
    </p>
    <p>
      <button @click="btnLogin">登录</button>
    </p>
    <b>
      <router-link to="/register">没有账号,请 亲 先注册</router-link>
    </b>
  </div>
</template>
<script>
import request from "../../utils/request";
import api from "../../api/index";

export default {
  props: {},
  components: {},
  data() {
    return {
      phone: "",
      pwd: ""
    };
  },
  computed: {},
  methods: {
    btnLogin() {
      const phone = this.phone.toString();
      const pwd = this.pwd.toString();
      api.Login({
          phone,
          password: pwd
        }).then(res => {
          let { code, message, token } = res;
          if (code) {
            window.localStorage.token = token;
            alert(message);
            this.$router.push("/");
          } else {
            alert(message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../utils/scss/common.scss";

.loginBox{
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