/***************共用部分***************/
export const publicRule = {
  name: [
    { required: true, message: '请输入姓名!', trigger: 'blur' },
    { type: "string", pattern: /[\u4e00-\u9fa5]+/, message: '请输入正确姓名!', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码!', trigger: 'blur' },
    { type: "string", pattern: /^[A-Za-z0-9]{6,12}$/, message: '请输入6-12位字母或数字的密码!', trigger: 'blur' }
  ],
  idcard: [
    { required: true, type: "string", message: '请输入身份证号!', trigger: 'blur' },
    { type: "string", pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/, message: '身份证不匹配!', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入电子邮箱!', trigger: 'blur' },
    { type: 'string', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请正确填写邮箱!', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号!', trigger: 'blur' },
    { type: 'string', pattern: /^1(3|4|5|6|7|8|9)\d{9}$/, message: '请正确填写手机号!', trigger: 'blur' }
  ],
  phoneCode: [
    { required: true, type: "string", message: '请输入验证码!', trigger: 'blur' }
  ]
}
/***************自然人注册部分***************/
//自然人注册表单
// export const natureList = {
//   name: "", //姓名
//   password: "", //密码
//   rePassword: "", //重新确认密码
//   idcard: "", //身份证
//   birthday: "", //生日
//   nation: "", //民族
//   sex: '',
//   registerAddr: "", //户籍地址
//   sendAddr: "", //送达地址
//   email: "", //邮箱
//   phone: "", //手机号
//   phoneCode: "", //手机号验证码
// }
export const natureList = {
  name: "自然人", //姓名
  password: "qqqqqq", //密码
  rePassword: "qqqqqq", //重新确认密码
  idcard: "350322199901011234", //身份证
  birthday: "", //生日
  nation: "", //民族
  sex: '',
  registerAddr: "福建", //户籍地址
  sendAddr: "福建", //送达地址
  email: "123@qq.com", //邮箱
  phone: "13200000000", //手机号
  phoneCode: "", //手机号验证码
}
// 自然人注册表单规则
export const natureListRule = {
  ...publicRule,
  birthday: [
    { required: true, type: 'date', message: '请设置日期', trigger: 'change', pattern: /.+/ }
  ],
  sex: [
    { required: true, message: '请设置性别!', trigger: 'blur' }
  ],
  nation: [
    { required: true, message: '请输入民族!', trigger: 'blur' },
    { type: "string", pattern: /[\u4e00-\u9fa5]+/, message: '输入不合法!', trigger: 'blur' }
  ],
  registerAddr: [
    { required: true, message: '请输入户籍地址!', trigger: 'blur' }
  ],
  sendAddr: [
    { required: true, message: '请输入送达地址!', trigger: 'blur' }
  ],
}

// //单位组织注册表单
// export const groupList = {
//   groupType: "", //组织类型
//   groupName: "测试", //主体名称
//   number: "000", //社会统一信用码
//   password: "qqqqqq", //密码
//   rePassword: "qqqqqq", //重新确认密码
//   name: "测试", //法定代表人姓名
//   idcard: "350322199101011234", //法定代表人公民身份证号
//   email: "1@qq.com", //单位电子邮箱
//   proveFile: "", //单位证明文件
//   clientName: "测试", //被委托人姓名
//   clientIdcard: "350322199101011234", //被委托人公民身份证号
//   clientFile: "", //法定代表人委托书
//   phone: "13255555555", //手机号
//   phoneCode: "1223", //手机号验证码
// }
export const groupList = {
  groupType: "", //组织类型
  groupName: "", //主体名称
  number: "", //社会统一信用码
  password: "", //密码
  rePassword: "", //重新确认密码
  name: "", //法定代表人姓名
  idcard: "", //法定代表人公民身份证号
  email: "", //单位电子邮箱
  proveFile: "", //单位证明文件
  clientName: "", //被委托人姓名
  clientIdcard: "", //被委托人公民身份证号
  clientFile: "", //法定代表人委托书
  phone: "", //手机号
  phoneCode: "", //手机号验证码
}
// 单位组织注册表单规则
export const groupListRule = {
  ...publicRule,
  groupType: [
    { required: true, message: '请选择组织类型', trigger: 'blur' }
  ],
  groupName: [
    { required: true, message: '请填写主体名称', trigger: 'blur' }
  ],
  number: [
    { required: true, message: '请填写社会统一信用码', trigger: 'blur' }
  ],
  proveFile: [
    {
      required: true,
      type: 'string',
      message: '请上传单位证明文件!',
      trigger: 'blur'
    }
  ],
  clientFile: [
    {
      required: true,
      type: 'string',
      message: '请上传法定代表人委托书!',
      trigger: 'blur'
    }
  ]
}

//法院人员注册
export const courtList = {
  name: "某某", //姓名
  password: "qqqqqq", //密码
  rePassword: "qqqqqq", //重新确认密码
  idcard: "350322199501011234", //身份证
  company:"纵横",//公司名称
  position:"",//职位
  phone: "13275555555", //手机号
  phoneCode: "3458", //手机号验证码
}
// export const courtList = {
//   name: "", //姓名
//   password: "", //密码
//   rePassword: "", //重新确认密码
//   idcard: "", //身份证
//   company:"",//公司名称
//   position:"",//职位
//   phone: "", //手机号
//   phoneCode: "", //手机号验证码
// }
//法院人员注册规则
export const courtListRule = {
  name: [
    { required: true, message: '请输入姓名!', trigger: 'blur' },
    { type: "string", pattern: /[\u4e00-\u9fa5]+/, message: '请输入正确姓名!', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码!', trigger: 'blur' },
    { type: "string", pattern: /^[A-Za-z0-9]{6,12}$/, message: '请输入6-12位字母或数字的密码!', trigger: 'blur' }
  ],
  idCard: [
    { required: true, type: "string", message: '请输入身份证号!', trigger: 'blur' },
    { type: "string", pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/, message: '身份证不匹配!', trigger: 'blur' }
  ],
  company: [
    { required: true, message: '请输入公司名称!', trigger: 'blur' },
    { type: "string", pattern: /[\u4e00-\u9fa5]+/, message: '请输入正确公司名称!', trigger: 'blur' }
  ],
  position:[ {required: true,  message: '请选择职位!',trigger: 'change',type:'number'}],
  phone: [
    { required: true, message: '请输入手机号!', trigger: 'blur' },
    { type: 'string', pattern: /^1(3|4|5|6|7|8|9)\d{9}$/, message: '请正确填写手机号!', trigger: 'blur' }
  ],
  phoneCode: [
    { required: true, type: "string", message: '请输入验证码!', trigger: 'blur' }
  ]
}
