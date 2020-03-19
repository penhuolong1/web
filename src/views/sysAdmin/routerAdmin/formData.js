const routerInfoForm = {
  type: "0", //路由类型
  title: "", //路由中文名
  name: "", //路由英文名
  parentName: "", //父级名称
  parentId: "", //父级id
  path: "", //路由访问路径
  component: "layout/layout", //前端组件地址
  orderNum: 0, //同级排序
  hidden: false, //是否展示在菜单
  alone: false, //只有一个菜单时是否展示目录
  insert: false, //是否注入按钮/区块的名称和图标
  icon: "", //菜单图标
  perms: "" //授权标识
};

export default routerInfoForm;
