import mockTest from "@/api/test/mock";
import { login, getUserInfo, optionRole } from "@/api/user/user";
import { resetRouter } from "@/router";
import GLOBAL from "@/utils/constVal";

let app = GLOBAL.APP_NAME;
let user_roles = app + "-userRoles";
let user_Info = app + "-userInfo";
const user = {
  state: {
    roles: localStorage.getItem(user_roles)
      ? JSON.parse(localStorage.getItem(user_roles))
      : [], //用户角色身份（多身份）
    // roles: ['超级管理员'],
    userInfo: localStorage.getItem(user_Info)
      ? JSON.parse(localStorage.getItem(user_Info))
      : "" //用户个人信息
  },
  mutations: {
    //保存用户角色身份（多身份）
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    //保存用户个人信息
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  getters: {
    getRoles: state => state.roles, //获取用户角色身份（多身份）
    getUserInfo: state => state.userInfo //获取用户个人信息
  },
  actions: {
    // 登录
    Login({ commit, state }, userInfo) {
      userInfo.username = userInfo.username.trim(); //过滤用户昵称空格
      return new Promise((resolve, reject) => {
        login({ ...userInfo }).then(response => {
          resolve(response);
        });
      });
    },
    //  从多身份选择角色身份，告诉后端要session保存的角色信息
    SetOptionRole({ commit, state }, roleInfo) {
      return new Promise((resolve, reject) => {
        optionRole(roleInfo).then(response => {
          resolve(response);
        });
      });
    },
    //  获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          //请求成功存储数据
          if (response.state == 100) {
            const data = response.data;
            // localStorage.setItem(user_Info, JSON.stringify(data), 60); //60为 1分钟
            localStorage.setItem(user_Info, JSON.stringify(data));
            commit("SET_USERINFO", data);
          }
          resolve(response);
        });
      });
    },
    //退出登录
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        mockTest
          .logout(state.token)
          .then(() => {
            commit("SET_ROLES", ""); //清除角色身份信息
            commit("SET_USERINFO", ""); //清除用户信息
            localStorage.removeItem(user_roles); //移除角色身份信息记忆
            localStorage.removeItem(user_Info); //移除用户信息记忆
            commit("CLEAR_ADDROUTERS", []); //清除动态注入的路由
            commit("removeAllTab"); //移除选项卡记忆本地存储
            resetRouter(); //重置初始化路由
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
export default user;
