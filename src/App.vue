<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: auto;
}
#app {
  min-width: 1440px;
  height: 100%;
  background-color: #f1f4f7;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
.zh-plant-chooseType > .ivu-form-item-label {
  color: #2f60bd !important;
  font-size: 16px !important;
}
.zh-plant-chooseType .ivu-input {
  border-radius: 20px;
}
.zh-plant-chooseType .ivu-select-selection {
  border-radius: 20px;
}
</style>
