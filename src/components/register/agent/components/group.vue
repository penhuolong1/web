<template>
  <div>
    <div
      style="width:500px;margin: auto;"
      v-show="personStep==2"
    >
      <Form
        ref="groupList"
        :model="groupList"
        :rules="groupListRule"
        label-position="right"
        :label-width="200"
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
          label="组织类型"
          class="zh-plant-chooseType"
          prop="groupType"
        >
          <Select
            v-model="groupList.groupType"
            placeholder="请选择组织类型"
          >
            <Option
              v-for="(item,index) in typeTabList"
              :value="item"
            >{{item}}</Option>
          </Select>
        </FormItem>
        <FormItem
          label="主体名称"
          class="zh-plant-chooseType"
          prop="groupName"
        >
          <Input
            placeholder="请输入营业执照注册的主体名称（不区分中英文括号）"
            v-model="groupList.groupName"
          ></Input>
        </FormItem>
        <FormItem
          label="社会统一信用码"
          class="zh-plant-chooseType"
          prop="number"
        >
          <Input
            placeholder="请输入社会统一信用码"
            v-model="groupList.number"
          ></Input>
        </FormItem>
        <FormItem
          label="设置账号密码"
          class="zh-plant-chooseType"
          prop="password"
        >
          <Input
            placeholder="请设置您的账号密码，6-12位；请注意大小写锁定键是否开启"
            v-model="groupList.password"
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
            v-model="groupList.rePassword"
            type="password"
          ></Input>
        </FormItem>
        <FormItem
          label="法定代表人姓名"
          class="zh-plant-chooseType"
          prop="name"
        >
          <Input
            placeholder="必填"
            v-model="groupList.name"
          ></Input>
        </FormItem>
        <FormItem
          label="法定代表人公民身份证号"
          class="zh-plant-chooseType"
          prop="idcard"
        >
          <Input
            placeholder="必填"
            v-model="groupList.idcard"
          ></Input>
        </FormItem>
        <FormItem
          label="单位电子邮箱"
          class="zh-plant-chooseType"
          prop="email"
        >
          <Input
            placeholder="必填"
            v-model="groupList.email"
          ></Input>
        </FormItem>
        <FormItem
          label="单位证明文件"
          class="zh-plant-chooseType"
          prop="proveFile"
        >
          <Input
            placeholder="请上传文件"
            v-model="groupList.proveFile"
            style="width:220px"
            :disabled="true"
          ></Input>
          <Upload
            action="/api/court/register/addProvePath.jhtml"
            :data="{imgAddress:''}"
            accept="image/*"
            :show-upload-list="false"
            :on-success="(res)=> handleSuccess(res, groupList,'proveFile')"
            style="display:inline"
          >
            <Button
              type="primary"
              shape="circle"
              class="zh-getCodeBtn"
            >上传文件</Button>
          </Upload>
        </FormItem>
        <FormItem
          label="注册操作者身份"
          class="zh-plant-chooseType"
        >
          <div class="reg_groupSelect">
            <div>
              <span
                v-for="(item,index) in contrTypeTabList"
                :key="index"
                :class="{'reg_chooseFocus':contrTypeClicked==index}"
                @click="changeTab(index,'contrTypeClicked')"
              >{{item}}</span>
            </div>
          </div>
        </FormItem>
        <!-- 委托人专属 -->
        <div v-if="contrTypeClicked==1">
          <FormItem
            label="被委托人姓名"
            class="zh-plant-chooseType"
            prop="clientName"
          >
            <Input
              placeholder="必填"
              v-model="groupList.clientName"
            ></Input>
          </FormItem>
          <FormItem
            label="被委托人公民身份证号"
            class="zh-plant-chooseType"
            prop="clientIdcard"
          >
            <Input
              placeholder="必填"
              v-model="groupList.clientIdcard"
            ></Input>
          </FormItem>
          <FormItem
            label="法定代表人委托书"
            class="zh-plant-chooseType"
            prop="clientFile"
          >
            <Input
              placeholder="请上传文件"
              v-model="groupList.clientFile"
              style="width:220px"
              :disabled="true"
            ></Input>
            <Upload
              action="/api/court/register/addPrincipalPath.jhtml"
              :data="{imgAddress:''}"
              accept="image/*"
              :show-upload-list="false"
              :on-success="(res)=> handleSuccess(res, groupList,'clientFile')"
              style="display:inline"
            >
              <Button
                type="primary"
                shape="circle"
                class="zh-getCodeBtn"
              >上传文件</Button>
            </Upload>
          </FormItem>
        </div>
        <FormItem
          label="手机号"
          class="zh-plant-chooseType"
          prop="phone"
        >
          <Input
            placeholder="必填"
            v-model="groupList.phone"
          ></Input>
        </FormItem>
        <FormItem
          label="手机验证码"
          class="zh-plant-chooseType"
          prop="phoneCode"
        >
          <Input
            placeholder="必填"
            v-model="groupList.phoneCode"
            style="width:220px"
          ></Input>
          <Button
            type="primary"
            shape="circle"
            class="zh-getCodeBtn"
            @click="getPhoneCode('groupList',groupList)"
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
          @click="nextStep('groupList')"
        >下一步</Button>
      </div>
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
<style lang='css' scoped>
@import './nature.css';
</style>
<script>
import { groupRegist } from '@/api/user/user.js' // 提交注册信息
import { groupList, groupListRule } from '@/views/register/formData.js'
import registerMixin from '@/views/register/register.mixin'
import md5 from 'md5' // MD5加密
export default {
  mixins: [registerMixin],
  props: {
    personStep: {
      type: Number,
      required: true
    }
  },
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码!'))
      } else if (value !== this.groupList.password) {
        callback(new Error('两次密码输入不一致!'))
      } else {
        callback()
      }
    }
    return {
      groupList: Object.assign({}, groupList), //表格数据
      groupListRule: Object.assign(
        {
          rePassword: [
            { required: true, validator: validatePassCheck, trigger: 'blur' }
          ]
        },
        groupListRule
      ), //表格规则
      typeTabList: ['法人', '非法人组织'],
      contrTypeTabList: ['法定代表人本人', '法定代表人委托人'],
      contrTypeClicked: 0,
      isAgreet: false
    }
  },
  methods: {
    changeTab(index, cloum) {
      // 操作者类型选项卡切换
      this[cloum] = index
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
            break
          case 2: // 步骤2，完善信息提交
            this.stepEvent2(name, num)
            break
        }
      } else if (num == 4) {
        this.$router.push('/login')
        console.log('回到登录页')
        // 重置步骤
        this.$emit('nextStep', 2)
      }
    },
    stepEvent1() {
      // 步骤1，扫码认证
    },
    stepEvent2(name, num) {
      // 步骤1
      this.$refs[name].validate(valid => {
        if (valid) {
          // 判断操作者身份
          let that = this.groupList
          switch (this.contrTypeClicked) {
            case 0:
              var data = {
                organizationType: that.groupType,
                companyName: that.groupName,
                uniformCreditCode: that.number,
                password1: md5(that.password),
                password2: md5(that.rePassword),
                legalManName: that.name,
                legalManCode: that.idcard,
                email: that.email,
                provePath: that.proveFile,
                isLegalMan: 'false',
                phone: that.phone,
                phoneCode: that.phoneCode
              }
              break
            case 1:
              var data = {
                organizationType: that.groupType,
                companyName: that.groupName,
                uniformCreditCode: that.number,
                password1: md5(that.password),
                password2: md5(that.rePassword),
                legalManName: that.name,
                legalManCode: that.idcard,
                email: that.email,
                provePath: that.proveFile,
                isLegalMan: 'true',
                phone: that.phone,
                phoneCode: that.phoneCode,
                principalName: that.clientName,
                principalCode: that.clientIdcard,
                clientFile: that.clientFile
              }
              break
          }
          console.log(data)
          if (this.isAgreet == true) {
            // 这里写单位注册信息提交请求
            groupRegist(data).then(res => {
              console.log(res)
              if (res.state === 100) {
                this.$Message.success(res.message)
                // 进入下一步
                this.$emit('nextStep', num)
                // // 获取二维码
                // get2CodeImg().then(res => {
                //   console.log(res)
                //   this.mainCodeImg = res.data.data
                // })
              } else {
                this.$Message.error(res.message)
              }
            })
          } else {
            this.$Message.error('请先同意注册须知!')
          }
        } else {
          this.$Message.error('提交失败！')
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.formStyle {
  margin: auto;
  margin-left: -150px;
  width: 600px;
}
</style>
