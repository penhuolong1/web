<template>
  <div>
    <div class="reg_choose">
      <div>
        <span
          v-for="(item,index) in tabList"
          :key="index"
          :class="{'reg_chooseFocus':clicked==index}"
          @click="changeTab(index)"
        >{{item}}</span>
      </div>
    </div>
    <div class="choose_content">
      <div v-show="clicked==0">
        <!-- 自然人注册表单 -->
        <nature
          :personStep="myStep"
          v-on:nextStep="nextStep"
        ></nature>
      </div>
      <div v-show="clicked==1">
        <!-- 单位组织注册表单 -->
        <group
          :personStep="myStep"
          v-on:nextStep="nextStep"
        ></group>
      </div>
    </div>
  </div>
</template>

<script>
import nature from './components/nature' //自然人注册表单
import group from './components/group' //单位组织注册表单
export default {
  name: 'agent',
  components: {
    nature,
    group
  },
  data() {
    return {
      tabList: ['自然人注册', '单位组织注册'],
      clicked: 0,
      myStep: 2
    }
  },
  methods: {
    changeTab(index) {
      //注册类型选项卡切换
      this.clicked = index
    },
    nextStep(val) {
      // 下一步切换
      this.myStep = val
    }
  }
}
</script>

<style lang='scss'>
$mycolor: #5585c9;
.reg_choose {
  text-align: center;
  height: 35px;
  font-size: 0;
  margin: 20px 0;
}
.reg_choose > div {
  border: 1px solid $mycolor;
  display: inline-block;
}
.reg_choose span {
  height: 35px;
  line-height: 35px;
  width: 200px;
  display: inline-block;
  font-size: 16px;
  color: $mycolor;
}
.reg_choose span:hover {
  cursor: pointer;
}
.reg_chooseFocus {
  background: $mycolor;
  color: white !important;
}
.choose_content {
}
.formStyle {
  .zh-getCodeBtn {
    width: 150px;
    background-color: $mycolor;
    margin-left: 15px;
  }
  .reg_groupSelect {
    height: 30px;
  }
  .reg_groupSelect > div {
    display: inline-block;
  }
  .reg_groupSelect span {
    height: 30px;
    line-height: 30px;
    width: 185px;
    display: inline-block;
    font-size: 13px;
    color: #3162be;
    border: 1px solid #dddee1;
    border-radius: 30px;
    margin-right: 15px;
    text-align: center;
  }
  .reg_groupSelect span:hover {
    cursor: pointer;
  }
}
</style>
