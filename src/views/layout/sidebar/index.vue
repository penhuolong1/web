<template>
  <div class="menu-wrapper">
    <div class="menu-title">
      <img src="../../../assets/logo.png">
      <h1>溯源社会治理统一服务</h1>
    </div>
    <el-menu
      :default-active="$route.path"
      mode="vertical"
      router
      :unique-opened="false"
      :collapse-transition="false"
      @select="selectMenu"
    >
      <sidebar-item />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {
      path: 'adminMenu'
    }
  },
  components: { SidebarItem },
  computed: {
    variables() {
      return variables
    }
  },
  watch: {},
  methods: {
    //选择菜单触发的事件
    selectMenu(index) {
      console.log('-----------')
      console.log(index)
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/variables.scss';
.menu-wrapper {
  background-color: $menuBg;
  .menu-title {
    padding: 0 30px;
    margin-top: 16px;
    margin-bottom: 70px;
    img {
      width: 35px;
      height: 35px;
      vertical-align: top;
    }
    h1 {
      font-size: 18px;
      display: inline-block;
      line-height: 35px;
      margin: 0px;
      margin-left: 10px;
    }
  }
}
.logo-name {
  display: inline-block;
  height: 49px;
  background: #5585c9;
  border: 1px solid #5585c9;
  width: 100%;
  .logo-content {
  }
}
</style>
