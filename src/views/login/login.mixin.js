import md5 from 'md5'
import GLOBVAL from '@/utils/constVal'
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
    let username = localStorage.getItem(this.local_username)
    let password = localStorage.getItem(this.local_userpwd)
    if (username) {
      this.loginForm.username = username //获取记住的密码填入
      this.loginForm.password = password
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
            window.localStorage.setItem(this.local_username, this.loginForm.username)
            window.localStorage.setItem(this.local_userpwd, this.loginForm.password)
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
            if (res.state === 100) {
              this.$Message.destroy()
              this.$router.push('/home')
              this.getRole(res.roleType)
            }
          })
        } else {
          this.$message.error('请完善登录信息后登录！') //登录失败提示错误
          return false
        }
      })
    },
    remenberCheckChange(val) {
      if (!val) {
        window.localStorage.removeItem(this.local_username)
        window.localStorage.removeItem(this.local_userpwd)
      }
    },
    getRole(role) {
      let app = GLOBVAL.SYS_NAME
      let user_roles = app + '-userRoles'
      // localStorage.setItem(user_Info, JSON.stringify(roles), 60); //60为 1分钟
      localStorage.setItem(user_roles, JSON.stringify(role))
      this.$store.commit('SET_ROLES', role)
    }
  }
}
