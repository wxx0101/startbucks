<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
       
  }
}
</script>

<style lang="scss">
@import "./utils/scss/common.scss";
@import "./utils/scss/_minix.scss";

*{
  @include sizing;
}
#app{
  width: 100%;
  height: 100%;
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  height: pxTorem(45px);
  display: flex;
  font-size: pxTorem(18px);
  i{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  }
}

main{
  flex: 1;
  overflow: auto;
  .content{
    width: 100%;
    height: 100%;
  }
}


</style>
