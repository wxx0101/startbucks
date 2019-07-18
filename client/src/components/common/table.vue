<template>
  <div class="contentBox">
    <div class="tabTop">
      <div class="show">
        <span
          v-for="(item,index) in arr"
          :key="index"
          :class="{'active':index == ind}"
          @click="changeClick(index,item.string)"
        >{{item.name}}</span>
      </div>
    </div>

    <todoList/>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import todoList from "./todoList";

export default {
  props: {},
  components: {
    todoList
  },
  data() {
    return {
      arr: [
        {
          name: "加班",
          string: "overtime"
        },
        {
          name: "休假",
          string: "vacation"
        }
      ],
      ind: 0
    };
  },
  computed: {
    ...mapState(["type", "dataList"])
  },
  methods: {
    ...mapActions(["getTaskList"]),
    ...mapMutations(["getType"]),
    changeClick(index, string) {
      this.ind = index;
      this.getType(string);
      this.getTaskList();
    }
  },
  created() {
    this.getType("overtime");
    this.getTaskList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../utils/scss/common.scss";

.content {
  width: 100%;
  height: 100%;
  .contentBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .tabTop {
      width: 100%;
      height: pxTorem(40px);
      display: flex;
      justify-content: center;
      align-items: center;
      .show {
        width: 40%;
        height: 65%;
        display: flex;
        border-radius: 25px;
        border: 1px solid green;
        overflow: hidden;
        span {
          display: inline-block;
          color: green;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            background: green;
            color: #fff;
          }
        }
      }
    }
    .bigBox{
        flex: 1;
        overflow: auto;
    }
  }
}
</style>