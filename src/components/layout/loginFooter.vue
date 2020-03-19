<template>
  <div class="login-footer">
    <div class="leftC">
      <p style="font-size:16px;line-height:35px;padding-top: 5px;">XXXXX人民法院</p>
      <!-- <p  style="line-height:25px;padding-bottom: 5px;">莲前人民法院</p> -->
    </div>
    <div class="rightC">
      <p style="font-size:15px;line-height:35px;padding-top: 5px;">
        &nbsp;
        <span>
          <a href="http://218.5.2.1:18080/" target="_blank" style="color:white">法务云盘</a>
        </span>
        <span>
          <a href="http://courtapp.chinacourt.org/" target="_blank" style="color:white">最高人民法院</a>
        </span>
        <span>
          <a href="https://www.fjcourt.gov.cn/" target="_blank" style="color:white">福建省高级人民法院</a>
        </span>
        <span>
          <a href="https://www.xmcourt.gov.cn/" target="_blank" style="color:white">厦门市中级人民法院</a>
        </span>
        <span>
          <a href="http://tingshen.court.gov.cn/" target="_blank" style="color:white">中国庭审公开网</a>
        </span>
        <span>
          <label style="color:white">友情链接：</label>
        </span>
      </p>
      <p style="line-height:25px;padding-bottom: 5px;"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginFooter'
}
</script>

<style lang="scss">
.login-footer {
  width: 100%;
  height: 75px;
  width: 100%;
  box-sizing: border-box;
  background: #5585c9;
  box-shadow: 0 -1px 30px -10px black;
  position: fixed;
  bottom: 0;
  z-index: 999;
  .leftC {
    height: 67px;
    width: 250px;
    padding-left: 80px;
    display: inline-block;
    float: left;

    p {
      line-height: 30px;
      color: #fff;
    }
  }
  .rightC {
    height: 67px;
    display: inline-block;
    padding-right: 80px;
    float: right;
    p {
      line-height: 30px;
      color: #fff;
      span {
        display: inline-block;
        margin-left: 30px;
        float: right;
        a {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
