import axiosConfig from "@/utils/axios.js";
// 创建正式用例接口基础配置
const service = axiosConfig.ajax();

//获取系统管理的菜单
export function getRouterList(params) {
  return service({
    url: "/court/admin/getMenuList.jhtml",
    method: "get",
    params
  });
}

//添加系统管理的菜单
export function addRoleMenu(params) {
  return service({
    url: "/court/admin/addRoleMenu.jhtml",
    method: "get",
    params
  });
}

//修改系统管理的菜单
export function editRoleMenu(params) {
  return service({
    url: "/court/admin/editRoleMenu.jhtml",
    method: "get",
    params
  });
}

//删除系统管理的菜单
export function delRoleMenu(params) {
  return service({
    url: "/court/admin/delRoleMenu.jhtml",
    method: "get",
    params
  });
}

//获取角色类型
export function getRolesType(params) {
  return service({
    url: "/court/admin/getRolesType.jhtml",
    method: "get",
    params
  });
}

//获取角色列表
export function getRoles(params) {
  return service({
    url: "/court/admin/getRoles.jhtml",
    method: "get",
    params
  });
}

//删除角色
export function deleteRole(params) {
  return service({
    url: "/court/admin/deleteRole.jhtml",
    method: "get",
    params
  });
}

//删除角色
export function addRole(params) {
  return service({
    url: "/court/admin/addRole.jhtml",
    method: "get",
    params
  });
}

//修改角色
export function editRole(params) {
  return service({
    url: "/court/admin/editRole.jhtml",
    method: "get",
    params
  });
}

//查询对应角色的路由列表
export function getRoleIdMenu(params) {
  return service({
    url: "/court/admin/getRoleIdMenu.jhtml",
    method: "get",
    params
  });
}

//编辑角色权限（确认授权）
export function editRoleAuth(data) {
  return service({
    url: "/court/admin/editRoleAuth.jhtml",
    method: "post",
    data
  });
}

//获取当前所有用户列表
export function getUserList(params) {
  return service({
    url: "/court/admin/getUserList.jhtml",
    method: "get",
    params
  });
}

//编辑该用户所绑定的角色
export function editInsiderInfo(params) {
  return service({
    url: "/court/admin/editInsiderInfo.jhtml",
    method: "get",
    params
  });
}

//禁用、启用该用户
export function certification(params) {
  return service({
    url: "/court/admin/certification.jhtml",
    method: "get",
    params
  });
}

//删除该用户
export function delUser(params) {
  return service({
    url: "/court/admin/delUser.jhtml",
    method: "get",
    params
  });
}
