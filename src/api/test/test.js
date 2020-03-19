import axiosConfig from "@/utils/axios.js";
// 创建测试用例接口基础配置
const service = axiosConfig.ajaxtest();

export function getMenuList(params) {
  return service({
    url: "/app/mock/236973/test/getMenuList.jhtml",
    method: "get",
    params
  });
}


export function test1(params) {
  return service({
    url: "/app/mock/18/court/register/registerByGroup.jhtml",
    method: "post",
    params
  });
}

export function courtRegist(params) {
  return service({
    url: "/app/mock/18/court/register/court.jhtml",
    method: "post",
    params
  });
}
//获取法院工作人员列表
export function courtRegistPositionList () {
  return service({
    url: '/app/mock/18/court/register/positionList.jhtml',
    method: 'post',
  });
}
