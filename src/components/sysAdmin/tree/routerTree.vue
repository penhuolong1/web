<template>
  <div>
    <el-tree
      :data="treeData"
      :props="defaultProps"
      :render-content="renderContent"
      :default-expand-all="true"
      :check-strictly="true"
      node-key="id"
      ref="routerTree"
      show-checkbox
      @check-change="handleCheckChange"
      element-loading-text="拼命加载中"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: 'routerTree',
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  props: {
    treeData: {
      type: Array,
      default: []
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate)
    },
    //设置默认勾选的节点
    setCheckedKeys(keyAry) {
      this.clearAllChecked()
      //再设置
      this.$refs.routerTree.setCheckedKeys(keyAry)
    }, //先清除所有勾选
    clearAllChecked() {
      this.$refs.routerTree.setCheckedKeys([])
    },
    //获取当前勾选的节点
    getCheckedKeys() {
      //接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false
      return this.$refs.routerTree.getCheckedNodes(false, true)
    },
    //自定义树内容
    renderContent(h, { node, data, store }) {
      // console.log(node, data, store)
      let type = ''
      switch (data.type) {
        case '0':
          type = '目录'
          break
        case '1':
          type = '菜单'
          break
        case '2':
          type = '页面'
          break
        case '3':
          type = '按钮/区块'
          break
      }
      return (
        <span>
          <span>
            <i class={data.icon}></i>
            <span>{data.title}</span>
          </span>
          <span class="treeClass">{type}</span>
        </span>
      )
    }
  }
}
</script>


<style lang='scss' scoped>
.treeClass {
  background-color: skyblue;
  font-size: 11px;
  padding: 2px;
  border-radius: 5px;
  color: white;
  margin-left: 5px;
}
</style>
