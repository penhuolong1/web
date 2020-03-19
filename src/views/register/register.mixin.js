import nation from '@/utils/nations.js'
import { sendPhoneCode } from '@/api/user/user.js'
import { tools_calcIdentiyInfo } from '@/utils/tools.js'
export default {
  data() {
    return {
      nationAry: nation, // 民族列表
      codeState: '获取',
      sendOpen: true // 验证码开关
    }
  },
  methods: {
    //假设的验证码方法
    getPhoneCode1(formName, list) {
      //发送验证码
      console.log('yanzhengma');
    },
    getPhoneCode(formName, list) {
      // 获取验证码
      // 发送验证码开关
      console.log(1233333)
      if (this.sendOpen) {
        // 校验手机号
        this.$refs[formName].validateField('phone', erroMsg => {
          if (erroMsg) {
            this.$Message.error('手机号校验不通过!')
          } else {
            // 关闭验证码开关
            this.sendOpen = false
            // 发送验证码
            console.log(555)
            sendPhoneCode({ phone: list.phone, sendType: 0 }).then(
              res => {
                if (res.state == 100) {
                  this.$Message.success(res.message)
                  // 设置初始时间
                  var time = 60
                  // 设置定时器
                  var timmer = setInterval(() => {
                    time--
                    this.codeState = time + '秒后重新获取'
                    if (time == 0) {
                      clearInterval(timmer)
                      this.codeState = '重新获取'
                      this.sendOpen = true // 开启验证码开关
                    }
                  }, 1000)
                }
              }
            )
          }
        })
      }
    },
    // 计算出生年月和日期
    plant_autoFillId(data, idcard, sex, birthday) {
      let obj = tools_calcIdentiyInfo(data[idcard]);
      data[sex] = obj.sex;
      data[birthday] = new Date(obj.birth);
      console.log(data[birthday])
    },
    // 文件上传成功
    handleSuccess(res, list, cloum) {
      if (res.state == 100) {
        this.$Message.success('文件上传成功!')
        list[cloum] = res.data
      } else {
        this.$Message.error('文件上传失败!')
      }
    },
  }
}
