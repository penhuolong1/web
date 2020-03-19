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
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
    >
      <sidebar-item :menu="getmenuRoutes" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters(['getrouters', 'getsidebar', 'getmenuRoutes']),
    isCollapse() {
      return !this.getsidebar.opened
    },
    variables() {
      return variables
    }
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    $route: function(val) {
      this.selectmenu(val)
    }
  },
  methods: {
    //选择菜单触发的事件
    selectmenu(key) {
      this.$store.dispatch('addTab', {
        title: key.meta && key.meta.title ? key.meta.title : '未设置标题',
        path: key.path
      })
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
