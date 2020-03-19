<template>
  <div class="menu-wrapper">
    <template v-for="(item) in menu">
      <!-- 此菜单下没有子菜单 -->
      <el-menu-item
        class="menu-item"
        v-if="!item.children && !item.hidden"
        :key="parentPath+'/'+item.path"
        :index="parentPath+'/'+item.path"
      >
        <i :class="item.meta.icon ? item.meta.icon : ''"></i>
        <span slot="title">
          {{
          item.meta.title
          ? item.meta.title
          : item.path + "未设置菜单名称"
          }}
        </span>
      </el-menu-item>

      <!-- 此菜单下只有一个子菜单（根据alone判断是否直接指向该菜单） -->
      <el-menu-item
        v-if="
          item.children &&
            item.children.length === 1 &&
            !item.hidden &&
            item.alone
        "
        :key="item.path"
        :index="
          item.children[0].path
        "
      >
        <i :class="
            item.children[0].meta.icon
              ? item.children[0].meta.icon
              : ''
          "></i>
        <span slot="title">
          {{
          item.children[0].meta.title
          ? item.children[0].meta.title
          : item.children[0].path + "未设置菜单名称"
          }}
        </span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="
          item.children &&
            !item.hidden &&
            (item.children.length > 1 ||
              (item.children.length === 1 && !item.alone && typeof(item.children[0])!=='undefined'))
        "
        :key="item.path"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.meta.icon ? item.meta.icon : ''"></i>
          <span>
            {{
            item.meta.title
            ? item.meta.title
            : item.path + "未设置菜单名称"
            }}
          </span>
        </template>
        <sidebar-item
          :menu="item.children"
          :parent="item.path"
        />
      </el-submenu>
      <!-- 递归 -->
    </template>
  </div>
</template>

<script>
import { menuRouter } from '@/router/index'
export default {
  name: 'SidebarItem',
  data() {
    return {
      menu: null, // 菜单的列表
      parentPath: '/home' // 父路由
    }
  },
  created() {
    this.menu = menuRouter
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.menu-item {
  width: 100%;
  height: 44px;
  line-height: 44px;
  margin-bottom: 36px;
  border-radius: 5px;
  color: $menuText;
  padding: 0px !important;
  .el-icon-menu {
    width: 44px;
    line-height: 44px;
    background-color: $IconBg;
    margin-top: -2px;
  }
  &.is-active {
    background-color: $menuActiveBg;
    color: $menuActiveText;
    .el-icon-menu {
      background-color: transparent;
    }
  }
}
.title {
  color: #fff;
}
</style>
