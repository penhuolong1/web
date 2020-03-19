import md5 from 'md5'
import GLOBAL from '@/utils/constVal'
import {login} from '@/api/user/user'
export default {
  components: { },
  data(){
    return{
      smdl: true,
      remenberCheck: false,
      userCodeSrc: '/api/court/login/code.jhtml',
      loginRules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      loginLoading: false,
      selectRoleShow: false,
      roleList: []
    }
  },
  mounted() {
    //判断是否有记住密码
    let username = localStorage.getItem(this.mark)
    if (username) {
      this.loginForm.username = username //获取记住的密码填入
      this.remenberCheck = true
    }
  },
  methods: {
    //提交登录
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        //格式规范校验成功
        if (valid) {
          //判断记住用户名是否被勾选
          if (this.remenberCheck) {
            window.localStorage.setItem(this.mark, this.loginForm.username)
          }
          //处理提交内容
          let sendData = JSON.parse(JSON.stringify(this.loginForm))
          sendData.password = md5(sendData.password)
          this.loginLoading = true
          this.$Message.loading({
            content: '正在登陆，请稍后...',
            duration: 0
          })
          login(sendData).then(res => {
            console.log(res)
          })
          // this.$store.dispatch('Login', sendData).then(res => {
          //   //登录成功，跳转到后台Home主页
          //   if (res.state == 100) {
          //     let roles = res.data.roles
          //     //获取角色信息
          //     this.roleList = roles
          //     if (roles.length > 0) {
          //       //该用户只有一个身份
          //       if (roles.length == 1) {
          //         //默认直接选择第一个角色进行登录
          //         this.setRole(roles[0].roleType)
          //       }
          //       //该用户有多个身份
          //       if (roles.length > 1) {
          //         //弹窗让用户选择角色身份
          //         this.selectRoleShow = true
          //       }
          //     } else {
          //       this.$Message.error({
          //         content: '该用户无绑定任何身份角色，暂无权限登录',
          //         duration: 5
          //       })
          //     }
          //   } else {
          //     this.clearLoaing()
          //     this.changeUserCode()
          //     this.loginForm.code = ''
          //   }
          // })
        } else {
          this.changeUserCode()
          this.$message.error('请完善登录信息后登录！') //登录失败提示错误
          return false
        }
      })
    }
  }
}
