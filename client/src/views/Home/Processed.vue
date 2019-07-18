<template>
  <div class="content">
      <Table />

  </div>
</template>
<script>
import Table from "../../components/common/table"
import {mapState,mapMutations} from "vuex"

export default {
  props: {},
  components: {
    Table
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations(['getStatus'])
  },
  created() {
    this.getStatus(2)
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>