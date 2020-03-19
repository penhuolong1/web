<template>
  <div>
    <!-- 页头 -->
    <login-header></login-header>
    <!-- 内容 -->
    <div class="regBox">
      <el-card class="regContent">
        <el-tabs type="card" tab-position="left" v-model="registType">
          <el-tab-pane name="agent">
            <span slot="label">
              <i class="el-icon-s-custom"></i>
              <span style="margin-left:5px">当事人/代理人注册</span>
            </span>
            <!-- 当事人/代理人注册表单 -->
            <agent></agent>
          </el-tab-pane>
          <el-tab-pane name="court">
            <span slot="label">
              <i class="el-icon-s-custom"></i>
              <span style="margin-left:5px">法院工作人员注册</span>
            </span>
            <!-- 法院工作人员注册 -->
            <court></court>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import loginHeader from '@/components/layout/loginHeader'
import agent from '@/components/register/agent/index'
import court from '@/components/register/court/index'
export default {
  components: { loginHeader, agent, court },
  data() {
    return {
      registType: 'agent'
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss">
$mycolor: #5585c9;
.regBox {
  padding: 4.46% 10%;
  .regContent {
    position: relative;
    height: 625px;
    .el-tabs__header {
      background-color: $mycolor;
      width: 270px;
    }
    .el-card__body,
    .el-tabs--left,
    .el-tabs__header {
      height: 100%;
    }
    .el-tabs__item.is-active {
      color: $mycolor;
      background-color: white;
    }
    .el-tabs__item.is-left {
      text-align: center;
      line-height: 100px;
      font-size: 20px;
      font-weight: bold;
    }
    .el-tabs__item {
      color: white;
      border: $mycolor;
      background-color: $mycolor;
      height: 100px;
    }
    .el-tabs__nav {
      background-color: $mycolor;
      border-bottom: unset;
    }
    .el-card__body {
      padding: unset;
    }
    .el-tabs__content {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
