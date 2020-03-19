<template>
  <div>
    <el-dialog
      title="设置角色类型"
      :visible.sync="editModalShow"
      center
      width="30%"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div>
        <el-form :model="workerInfoForm" :rules="rules" ref="addWorkerInfoForm" label-width="120px">
          <el-form-item label="选择角色名（支持多选）" label-width="200px">
            <el-select v-model="workerInfoForm.roles" multiple placeholder="请选择角色名">
              <el-option
                v-for="(item, index) in RoleList"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="addRoleSubmit('addWorkerInfoForm')"
          :loading="addLoading"
        >确 定</el-button>
        <el-button @click="cancelEvent">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRoles } from '@/api/sys/sys'
export default {
  name: 'addRole',
  data() {
    return {
      RoleList: [],
      rules: {}
    }
  },
  props: {
    workerInfoForm: {
      type: Object,
      default: {}
    },
    editModalShow: {
      type: Boolean,
      default: false
    },
    addLoading: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //获取用户角色类型列表
    this.getRoleTypes()
  },
  methods: {
    // 添加角色
    addRoleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        let formData = JSON.parse(JSON.stringify(this.workerInfoForm))
        formData.roles = formData.roles.join(',')
        if (valid) {
          this.$emit('addClick', formData)
        } else {
          return false
        }
      })
    },
    //获取用户角色类型列表
    getRoleTypes() {
      getRoles().then(res => {
        if (res.state === 100) {
          this.RoleList = res.roles
        }
      })
    },
    //取消事件
    cancelEvent() {
      this.$emit('cancel', false)
    }
  }
}
</script>

<style>
</style>
