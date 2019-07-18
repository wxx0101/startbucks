<template>
  <div class="wrap">
    <Head/>
    <Nav />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Head from "./common/Head";
import Nav from "./common/Nav";
import axios from "axios"
import request from "../utils/request"
import api from "../api/index"
import {mapMutations} from "vuex"

export default {
  props: {},
  components: {
    Head,
    Nav
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations(['getapplicationData','changeOpen'])
  },
  created() {
    api.isLogin().then(res => {
        window.localStorage.applicationData = JSON.stringify(res.data)
        this.getapplicationData(res.data)
    }).catch(error => {
      console.log(error)
    })

  },
  mounted() {},
  beforeDestroy(){
    this.changeOpen(false)
  }
};
</script>
<style scoped lang="">
</style>