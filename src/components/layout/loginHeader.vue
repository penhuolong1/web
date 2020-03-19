<template>
  <div>
    <div class="header">
      <div class="logo">
        <span @click="goHome">
          <img src="../../assets/logo.png" />
          <div class="logo-title">
            <div class="title1">法院后台前端框架</div>
            <div>法院业务通用后台框架</div>
          </div>
        </span>
      </div>
      <div class="info">
        本网站只支持IE9+等现代浏览器
        <a
          href="https://www.google.cn/intl/zh-CN/chrome/"
          target="_blank"
          style="color: wheat;"
        >chrome下载</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginHeader',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.header {
  height: 100px;
  position: relative;
  background: #5585c9;
  border-bottom: 2px solid white;
  align-items: center;
  display: flex;
  color: white;
  .logo {
    margin-left: 30px;
    width: 500px;
    float: left;
    height: 65px;
    cursor: pointer;
    img {
      height: 100%;
    }
    .logo-title {
      display: inline-block;
      vertical-align: top;
      padding-left: 20px;
      font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
      .title1 {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
  .info {
    position: absolute;
    bottom: 10px;
    right: 30px;
  }
}
</style>
