import Vue from "vue";
import router from "./router/";
import store from "./store/";
// import { Message, MessageBox } from "element-ui";

const whiteList = ["/login", "/loginAdmin", "/register", "/resetPwd","/adminMenu", "/adminPage", "/adminMenu/ce","/ce"]; // 不重定向白名单

// main.js 路由守卫
router.beforeEach(async (to, from, next) => {
  console.log("路由拦截", to.path);
  // 判断是否有角色身份（代表已登录）
  if (store.getters.getRoles.length > 0) {
    console.log("已登录，有角色身份");

    if (to.path === "/login" || to.path === "/loginAdmin") {
      console.log("有角色身份 , 将要去登录页,强制转到后台首页");
      next({
        path: "/"
      });
    } else {
      console.log("有角色身份 , 不是去登录页,");
      //根据角色权限获取动态生成的菜单路由
      if (store.getters.getaddRouters.length == 0) {
        console.log(
          "有角色身份，动态路由未注入过，更新获取用户信息，并获取该用户路由菜单信息，添加动态路由后再跳转访问的路由"
        );
        // 获取用户信息
        await store.dispatch("GetInfo");
        let role = store.getters.getUserInfo.roleType;
        console.log("当前角色", role);
        //用户信息请求成功根据角色获取路由
        console.log("用户信息获取成功，正在获取菜单路由信息...");
        await store.dispatch("GenerateRoutes", {
          role
        });
        // hack方法 确保addRoutes已完成
        next({
          ...to,
          replace: true
        });
      } else {
        console.log(
          "有角色身份，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过"
        );
        next(); //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的页面会自动进入404页面
      }
    }
  } else {
    console.log("无角色身份");

    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log("在免登录白名单，直接进入");
      next();
    } else {
      console.log("不在免登录白名单，跳转登录页");
      // 不在免登录白名单，跳转登录页
      next("/login");
    }
  }
});

// 按钮权限相关的自定义指令
Vue.directive("permission", {
  bind: (el, binding) => {
    //获取权限按钮绑定的按钮名称
    let btnName = binding.value;
    //获取当前路由需要权限的按钮组
    let btnGroup = store.getters.getBtnPermissions;
    //判断当前角色是否具有该按钮权限
    let permission = false;
    let nowBtnInfo = {};
    btnGroup.forEach((item, index) => {
      if (item.perms === btnName) {
        permission = true;
        nowBtnInfo = item;
      }
    });
    console.log("nowBtnInfo", nowBtnInfo);
    //必须等dom更新完毕才去获取父节点不然parentNode获取不到
    Vue.nextTick(() => {
      //有权限返回按钮名称，无权限删除子元素，相当于v-if
      if (permission) {
        if (nowBtnInfo.insert) {
          el.lastChild.innerText = nowBtnInfo.title; //注入按钮、区块名称
          var icon = document.createElement("i"); //创建一个i标签,用来存放图标
          icon.className = nowBtnInfo.icon; //设置标签class属性
          //  insertBefore()函数用法：
          // 新元素：你想插入的元素(newElement)
          // 目标元素：你想把这个元素插入到哪个元素(targetElement)
          // 父元素：目标元素的父元素(parentELement)
          el.insertBefore(icon, el.lastChild); //注入图标标签
        }
        return true;
      } else {
        el.parentNode.removeChild(el);
        return false;
      }
    });
  }
});
