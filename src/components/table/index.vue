<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item,index) in tableHead"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
      <!-- <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column> -->

    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    tableData: null,
    tableHead: null
  },
  created() {
    console.log(typeof this.tableData)
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="sass">

</style>
