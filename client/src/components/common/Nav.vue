<template>
  <nav>
    <router-link to="/Home/Notprocessed">
      <i class="iconfont icon-05"></i>待处理
    </router-link>
    <router-link to="/Home/Send">
      <i class="iconfont icon-07"></i>已发送
    </router-link>
    <router-link to="/Home/Processed">
      <i class="iconfont icon-yibangding"></i>已处理
    </router-link>
  </nav>
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
nav{
  width: 100%;
  height: pxTorem(60px);
  display: flex;
  box-shadow: 0 20px 20px #eee;
  margin-bottom: 40px;
  a{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    &.router-link-active{
      color: green;
    }
  }
}
</style>