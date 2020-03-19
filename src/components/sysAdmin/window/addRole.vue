<template>
  <div>
    <el-dialog
      :title="roleInfoForm.id ? '修改角色信息' : '添加角色信息'"
      :visible.sync="addRoleShow"
      center
      width="30%"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div>
        <el-form
          :model="roleInfoForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色名称" prop="name">
            <el-input v-model="roleInfoForm.name"></el-input>
          </el-form-item>
          <el-form-item label="角色身份" prop="type">
            <el-select v-model="roleInfoForm.type" placeholder="角色身份">
              <el-option
                v-for="(item, index) in RolesTypeList"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" prop="description">
            <el-input type="textarea" v-model="roleInfoForm.description"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addRoleSubmit('ruleForm')" :loading="addLoading">确 定</el-button>
        <el-button @click="cancelEvent">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRolesType } from '@/api/sys/sys'
export default {
  name: 'addRole',
  data() {
    return {
      RolesTypeList: [],
      rules: {
        name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
        type: [{ required: true, message: '请选择角色类型', trigger: 'blur' }]
      }
    }
  },
  props: {
    roleInfoForm: {
      type: Object,
      default: {}
    },
    addRoleShow: {
      type: Boolean,
      default: false
    },
    addLoading: {
      type: Boolean,
      default: false
    }
  },
  created() {
    //获取用户角色类型列表
    this.getRoleTypes()
  },
  methods: {
    // 添加角色
    addRoleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        let formData = JSON.parse(JSON.stringify(this.roleInfoForm))
        if (valid) {
          this.$emit('addClick', formData)
        } else {
          return false
        }
      })
    },
    //获取用户角色类型列表
    getRoleTypes() {
      getRolesType().then(res => {
        if (res.state === 100) {
          this.RolesTypeList = res.data
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
