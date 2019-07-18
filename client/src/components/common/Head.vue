<template>
  <header>
    <i class="iconfont icon-arrow-left"></i>
    <h4>加班/休假</h4>
    <i class="iconfont icon-fangdajing" @click="searchBth"></i>
  </header>
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
    searchBth() {
      this.$router.push("/search");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>