<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <my-header></my-header>
      <!-- 菜单选项卡 -->
      <!-- 视图容器 -->
      <!-- <div class="viewStyle">
        <Table
          :tableData="tableData"
          :tableHead="tableHead"
        ></Table>
      </div> -->
      <router-view class="viewStyle"></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar/'
import MyHeader from './header/'
import Table from '../../components/table/index'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      tableHead: [
        {
          prop: 'date',
          label: '日期',
          width: '180'
        },
        {
          prop: 'address',
          label: '地址',
          width: '180'
        },
        {
          prop: 'name',
          label: '姓名',
          width: ''
        }
      ]
    }
  },
  components: { sidebar, MyHeader, Table },
  computed: {
    ...mapGetters(['getsidebar']),
    classObj() {
      return {
        hideSidebar: !this.getsidebar.opened,
        openSidebar: this.getsidebar.opened
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .viewStyle {
    width: 100%;
    height: 100px;
    background-color: #fff;
  }
  .btnColor {
    background-color: #5585c9;
  }
}
</style>
