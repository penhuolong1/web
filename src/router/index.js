import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout"; //登录后的页面视图容器


// 右侧菜单路由
export const menuRouter = [
  {
    path: "index",
    name: "index",
    component: () => import("@/views/home/index"),
    meta: {
      icon: 'el-icon-menu',
      title: '首页'
    }
  },
  {
    path: "caseCenter",
    name: "caseCenter",
    component: () => import("@/views/caseCenter/index"),
    meta: {
      icon: 'el-icon-menu',
      title: '案例中心'
    }
  },
  {
    path: "mediationOrg",
    name: "mediationOrg",
    component: () => import("@/views/mediationOrg/index"),
    meta: {
      icon: 'el-icon-menu',
      title: '组织调解'
    }
  },
]

// 公用路由页面（不需要登录权限的路由页面，如：首页和登录页、注册页等一些不需要登陆权限的路由）
// 【注意注意注意】：
// 【重要】想要不需要登陆直接跳转记得在 src\permission.js 添加路由白名单，否则会被路由守卫拦截无法跳转。已登陆获取权限的用户不受影响，可以直接跳转。
// 【设置菜单注意事项】
//  菜单必须先包裹一层父路由作为目录，其组件指向登录后的页面视图容器Layout
//  hidden (默认为true，不在菜单显示) 设置为 false 可以在菜单显示（记得设置菜单的meta可选参数）；设置为 true 或不设置不会在菜单显示；设置为 ['角色名1','角色名2'] 包含的角色不会在菜单显示
//  alone (默认为true，当目录下只有一个菜单时显示目录) 设置为 false 当目录下只有一个菜单时不显示目录，直接显示该菜单
//  meta{参数} (可追加自定义参数，也可选内置参数：【title:"" //菜单名称 】；【icon:"" //图标名称（采用element的icon）】；【 role:['角色名1','角色名2'] //可访问的角色名称，不写默认都可访问】)
export const commontRouterMap = [{
    path: "/",
    name: "default",
    redirect: "/home/index",
    component: Layout
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/index")
  },
  {
    path: "/resetPwd",
    name: "resetPwd",
    component: () => import("@/views/forgetPwd/index")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/layout/layout"),
    redirect: '/home/index',
    children: menuRouter
  }
];

//实例化vue的时候只挂载commontRouterMap
const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [...commontRouterMap] //初始化先注入公共页面路由
  });
const router = createRouter();

//重置路由
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
