<template>
  <div>
    <div
      style="width:500px;margin: auto;"
      v-show="personStep==2"
    >
      <Form
        ref="courtList"
        :model="courtList"
        :rules="courtListRule"
        label-position="right"
        :label-width="150"
        class="formStyle"
      >
        <!-- 用来防止浏览器自动填充表单 -->
        <input
          type="password"
          style="width: 0;position: absolute;border:none"
        />
        <input
          type="text"
          style="width: 0;position: absolute;border:none"
        />
        <!-- 用来防止浏览器自动填充表单 -->

        <FormItem
          label="姓名"
          class="zh-plant-chooseType"
          prop="name"
        >
          <Input
            placeholder="请输入与您二代居民身份证登记相符的姓名"
            v-model="courtList.name"
          ></Input>
        </FormItem>
        <FormItem
          label="设置账号密码"
          class="zh-plant-chooseType"
          prop="password"
        >
          <Input
            placeholder="请设置您的账号密码，6-12位；请注意大小写锁定键是否开启"
            v-model="courtList.password"
            type="password"
          ></Input>
        </FormItem>
        <FormItem
          label="再次输入密码"
          class="zh-plant-chooseType"
          prop="rePassword"
        >
          <Input
            placeholder="再次输入密码以校验"
            v-model="courtList.rePassword"
            type="password"
          ></Input>
        </FormItem>
        <FormItem
          label="公民身份证号"
          class="zh-plant-chooseType"
          prop="idcard"
        >
          <Input
            placeholder="请输入您的公民身份证号（末尾X不区分大小写）"
            v-model="courtList.idcard"
          ></Input>
        </FormItem>
        <FormItem
          label="公司"
          class="zh-plant-chooseType"
          prop="company"
        >
          <Input
            placeholder="请输入公司名称"
            v-model="courtList.company"
          ></Input>
        </FormItem>
        <FormItem
          label="职位"
          class="zh-plant-chooseType"
          prop="position"
        >
          <i-select
            :model.sync="cityList"
            style="width:200px"
            @on-change="positionChange"
          >
            <i-option
              v-for="item in cityList"
              :value="item.value"
              :key="item.value"
            >
              {{ item.label }}</i-option>
          </i-select>
        </FormItem>
        <FormItem
          label="手机号"
          class="zh-plant-chooseType"
          prop="phone"
        >
          <Input
            placeholder="必填"
            v-model="courtList.phone"
          ></Input>
        </FormItem>
        <FormItem
          label="手机验证码"
          class="zh-plant-chooseType"
          prop="phoneCode"
        >
          <Input
            placeholder="必填"
            v-model="courtList.phoneCode"
            style="width:220px"
          ></Input>
          <Button
            type="primary"
            shape="circle"
            class="zh-getCodeBtn"
            @click="getPhoneCode('courtList',courtList)"
          >{{codeState}}</Button>
        </FormItem>
      </Form>
      <div class="textCenter">
        <a style="color:darkblue">厦门市思明区人民法院《金融和互联网法庭网上诉讼管理办法》</a>
      </div>
      <div class="textCenter">
        <Radio
          v-model="isAgreet"
          @click.native="agreetClick"
          class="agreetDiv"
        >
          <div class="radioText">我已详细阅读和知悉《注册须知》，接受并遵守厦门市思明区人民法院《金融和互联网法庭网上诉讼管理方法》的规定，依法进行诉讼活动。</div>
        </Radio>
      </div>
      <div class="textCenter zh-nextBtnDiv">
        <Button
          type="primary"
          shape="circle"
          class="zh-nextBtn"
          @click="nextStep('courtList')"
        >下一步</Button>
      </div>
      <!-- 我自己写的 -->
    </div>
    <div
      class="zh-plant-div"
      v-show="personStep==3"
    >
      <div style="padding: 130px 0px;height: 100%;">
        <Icon
          type="ios-checkmark-circle"
          size="80"
          style="color: #22B573"
        />
        <p style="padding:50px">注册成功！</p>
        <div class="textCenter zh-nextBtnDiv">
          <Button
            type="primary"
            shape="circle"
            class="zh-nextBtn"
            @click="nextStep"
          >回到首页</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 我自己写的 -->
<style lang='css' scoped>
@import '../agent/components/nature.css';
</style>
<!-- 我自己写的 -->
<script>
import { courtRegist, courtRegistPositionList } from '@/api/user/user.js' // 提交注册信息
import { courtList, courtListRule } from '@/views/register/formData.js'
import registerMixin from '@/views/register/register.mixin'
import md5 from 'md5' // MD5加密
export default {
  mixins: [registerMixin],
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码!'))
      } else if (value !== this.courtList.password) {
        callback(new Error('两次密码输入不一致!'))
      } else {
        callback()
      }
    }
    return {
      courtList: Object.assign({}, courtList), //表格数据
      courtListRule: Object.assign(
        {
          rePassword: [
            { required: true, validator: validatePassCheck, trigger: 'blur' }
          ]
        },
        courtListRule
      ), //表格规则
      isAgreet: false, //同意条款
      personStep: 2,
      cityList: [] //职位
    }
  },
  created() {
    // var data = {
    //   value: 1,
    //   label: '法院职位'
    // }
    courtRegistPositionList().then(res => {
      console.log(res.data)
      if (res.state == 100) {
        this.cityList = res.data
      } else {
        this.$Message.error(res.message)
      }
    })
  },
  methods: {
    positionChange(val) {
      this.courtList.position = val
    },
    agreetClick() {
      // 点击同意条款
      event.preventDefault() // 阻止事件冒泡
      if (this.isAgreet == '') {
        this.isAgreet = true
      } else {
        this.isAgreet = false
      }
    },
    // 点击下一步事件
    nextStep(name) {
      // 切换步骤状态
      var num = this.personStep + 1
      if (num <= 3) {
        // 检查当前步骤执行对应事件
        console.log(this.personStep)
        switch (this.personStep) {
          case 1: // 步骤1，扫码认证
            this.stepEvent1()
            break
          case 2: // 步骤2，完善信息提交
            this.stepEvent2(name, num)
            break
        }
      } else if (num == 4) {
        this.$router.push('/login')
        console.log('回到登录页')
      }
    },
    stepEvent1() {
      // 步骤1，扫码认证
    },
    stepEvent2(name, num) {
      console.log(1233)
      // 步骤2,提交完善注册信息
      this.$refs[name].validate(valid => {
        if (valid) {
          // 判断操作者身份
          let position = this.cityList[this.courtList.position - 1].label
          let that = this.courtList
          var data = {
            pass1: md5(that.password),
            pass2: md5(that.rePassword),
            idCard: that.idcard,
            userName: that.name,
            phone: that.phone,
            phoneCode: that.phoneCode,
            position: position,
            company: that.company
          }
          console.log(data)
          if (this.isAgreet == true) {
            courtRegist(data).then(res => {
              if (res.state == 100) {
                this.$Message.success(res.message)
                // 进入下一步
                console.log(num)
                this.personStep = 3
              } else {
                this.$Message.error(res.message)
              }
            })
          } else {
            this.$Message.error('请先同意注册须知!')
          }
        } else {
          this.$Message.error('请检查是否填写正确！')
          // 官方目前没有解决方案
          this.modal.loading = false
          setTimeout(() => {
            this.modal.loading = true
          }, 0)
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.formStyle {
  width: 500px;
  margin: auto;
  margin-left: -100px;
  width: 550px;
}
</style>
