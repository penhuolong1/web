<template>
  <div>
    <el-dialog
      title="选择登陆身份"
      :visible.sync="selectRoleShow"
      width="30%"
      center
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div style="text-align:center">
        <el-button
          type="primary"
          style="width:30%"
          v-for="(item, index) in roleList"
          :key="index"
          @click="roleClick(item)"
        >{{ item.name }}</el-button>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEvent">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    roleList: {
      type: Array,
      default: []
    },
    selectRoleShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    //取消事件
    cancelEvent() {
      this.$emit('cancel', false)
    },
    //选择角色
    roleClick(item) {
      this.$emit('roleClick', item.roleType)
    }
  }
}
</script>

<style></style>
