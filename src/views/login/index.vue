<template>
  <div id="login">
    <div class="icon-wrapper">
      <img src="../../assets/logo.png">
    </div>
    <div class="loginConbox">
      <!-- 内容 -->
      <div
        class="loginBox"
        @keydown.enter="submitForm"
      >
        <el-row class="loginCon">
          <el-col
            :span="13"
            style="text-align: center;"
          >
            <div class="form-wrapper">
              <div class="title">溯源社会治理统一服务</div>
              <el-form
                :model="loginForm"
                :rules="loginRules"
                ref="loginForm"
                status-icon
                class="demo-ruleForm"
              >
                <el-form-item prop="username">
                  <el-input
                    type="text"
                    v-model="loginForm.username"
                    auto-complete="off"
                    placeholder="账号"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item prop="username">
                  <el-input
                    type="text"
                    v-model="loginForm.password"
                    auto-complete="off"
                    placeholder="密码"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item class="check-wrapper">
                  <div class="checkBox">
                    <el-checkbox
                      v-model="remenberCheck"
                      @change="remenberCheckChange"
                    >记住我</el-checkbox>
                  </div>
                  <div class="smalltxt">
                    <router-link
                      class="a"
                      to="resetPwd"
                    >忘记密码?</router-link>
                  </div>
                </el-form-item>
                <el-form-item class="btn-wrapper">
                  <el-button
                    class="log-btn"
                    @click="submitForm()"
                  >登录</el-button>
                  <el-button class="reg-btn">注册</el-button>
                </el-form-item>
              </el-form>
            </div>

            <div class="prompt">
              <span>请使用谷歌浏览器(69版本以上)</span>
              <a>浏览器下载</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="technical-support">技术支持:厦门纵横集团</div>
  </div>
</template>
<script>
import loginMixin from './login.mixin'
export default {
  name: 'Login',
  mixins: [loginMixin],
  data() {
    return {
      loginForm: {
        username: localStorage.getItem(this.mark) || '',
        password: ''
      }
    }
  }
}
</script>
<style lang="scss" src="./login.scss"></style>
