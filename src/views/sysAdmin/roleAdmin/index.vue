<template>
  <div>
    <div>
      <el-button type="primary" plain @click="addMore('add', '')">添加角色</el-button>
    </div>
    <el-row>
      <el-col :span="14">
        <div style="margin-top:20px;">
          <!-- 角色列表 -->
          <el-table :data="tableData" v-loading="roleListLoading" stripe border>
            <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
            <el-table-column prop="name" label="角色名称" width="150" align="center"></el-table-column>
            <el-table-column prop="type" label="角色类型" width="150" align="center"></el-table-column>
            <el-table-column prop="description" label="备注" align="center">
              <template slot-scope="props">
                <span>{{ props.row.description ? props.row.description : "暂无" }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="250" align="center">
              <template slot-scope="props">
                <el-button size="mini" plain @click="addPow(props.row)" type="warning">授权</el-button>
                <el-button size="mini" plain @click="addMore('edit', props.row)" type="primary">编辑</el-button>
                <el-button
                  size="mini"
                  plain
                  type="danger"
                  @click="handleDelete(props.$index, props.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="searchFrom.pageNumber"
            :page-sizes="[10, 20, 50, 100]"
            :total="total"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            style="text-align: right;margin-top: 15px;"
          ></el-pagination>
        </div>
      </el-col>
      <el-col :span="10">
        <card style="margin-top:20px;margin-left:15px">
          <div style="padding-bottom:10px">
            <h3>
              当前选择授权的角色名称：
              <span>{{nowRoleName ? nowRoleName : '暂无'}}</span>
            </h3>
          </div>
          <div v-loading="treeLoading" element-loading-text="拼命加载中">
            <!-- 路由树 -->
            <router-tree :treeData="routerList" ref="myRouterTree"></router-tree>
            <!-- 提交授权区域 -->
            <div style="padding-top:10px" v-if="nowRoleName">
              <el-button
                type="primary"
                plain
                @click="sureAddPow"
                :loading="sureAddPowLoading"
                size="small"
              >确认授权</el-button>
              <el-button type="danger" plain @click="reSetCheck" size="small">重置选择</el-button>
            </div>
          </div>
        </card>
      </el-col>
    </el-row>

    <!-- 添加、编辑、弹窗 -->
    <add-role-win
      :addRoleShow="addRoleShow"
      :roleInfoForm="roleInfoForm"
      :addLoading="addLoading"
      @cancel="addCancel"
      @addClick="addClick"
      ref="addRole"
    ></add-role-win>
  </div>
</template>

<script>
import {
  getRoles,
  deleteRole,
  addRole,
  editRole,
  getRouterList,
  getRoleIdMenu,
  editRoleAuth
} from '@/api/sys/sys'
import addRoleWin from '@/components/sysAdmin/window/addRole.vue'
import routerTree from '@/components/sysAdmin/tree/routerTree.vue'
import roleInfoForm from './formData'
import sysAdminMixin from '../sysAdmin.mixin'
export default {
  mixins: [sysAdminMixin],
  components: {
    addRoleWin,
    routerTree
  },
  data() {
    return {
      tableData: [], //表格角色信息数据
      roleListLoading: false, //表格加载状态
      addRoleShow: false, //是否显示添加、编辑框
      addLoading: false, //添加按钮的加载状态
      nowType: '', //当前是点击添加还是编辑
      nowRoleName: '', //当前授权的角色名称
      nowRoleId: '', //当前授权的角色ID
      treeLoading: false, //路由树数据加载状态
      sureAddPowLoading: false, //确认授权按钮加载状态
      roleInfoForm: Object.assign({}, roleInfoForm) //当前编辑框的内容,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getList()
    },
    //获取角色列表
    getList() {
      this.roleListLoading = true
      //获取角色列表
      getRoles(this.searchFrom).then(res => {
        this.roleListLoading = false
        if (res.state === 100) {
          this.tableData = res.roles
          this.total = res.total
        }
      })
      //获取路由列表
      getRouterList().then(res => {
        if (res.state === 100) {
          let list = res.auths
          this.routerList = []
          this.delRouterList(list)
        } else {
          this.$Message.info({
            content: res.message,
            duration: 3
          })
        }
      })
    },
    // 添加/编辑角色
    addMore(type, row) {
      this.nowType = type //设置状态
      //编辑状态才有row
      if (row) {
        let data = JSON.parse(JSON.stringify(row))
        this.roleInfoForm = Object.assign({}, data) //使用带id的数据回填
      } else {
        //重置填写数据
        this.reSetAll('roleInfoForm', roleInfoForm)
      }
      this.addRoleShow = true //展示信息录入框
    },
    //确认添加、编辑事件
    addClick(formData) {
      this.addLoading = true
      //添加
      if (this.nowType == 'add') {
        addRole(formData).then(res => {
          this.addLoading = false
          if (res.state == 100) {
            this.$Message.success({
              content: '添加成功！',
              duration: 2
            })
            //成功后关闭窗体事件
            this.modelSuccessClose()
          }
        })
        //编辑
      } else {
        editRole(formData).then(res => {
          this.addLoading = false
          if (res.state == 100) {
            this.$Message.success({
              content: '编辑成功！',
              duration: 2
            })
            //成功后关闭窗体事件
            this.modelSuccessClose()
          }
        })
      }
    },
    //授权
    addPow(row) {
      this.nowRoleName = row.name
      this.nowRoleId = row.id
      this.treeLoading = true
      getRoleIdMenu({ id: row.id }).then(res => {
        this.treeLoading = false
        if (res.state == 100) {
          let data = res.data
          this.$refs.myRouterTree.setCheckedKeys(data)
        }
      })
    },
    //确认授权
    sureAddPow() {
      //获取当前勾选的节点数组
      let nodeAdy = this.$refs.myRouterTree.getCheckedKeys()
      let idAry = []
      nodeAdy.forEach((item, index) => {
        idAry.push(item.id)
      })
      //转换成字符串拼接
      let authIds = idAry.join(',')
      //提交授权
      this.sureAddPowLoading = true
      editRoleAuth({ authIds, id: this.nowRoleId }).then(res => {
        this.sureAddPowLoading = false
        if (res.state == 100) {
          this.$Message.success({
            content: '授权成功！',
            duration: 2
          })
          this.reSetRouter()
        }
      })
    },
    //重置选择
    reSetCheck() {
      this.$refs.myRouterTree.clearAllChecked()
    },
    //重置路由数据
    reSetRouter() {
      let role = this.$store.getters.getUserInfo.roleType
      this.$store.dispatch('GenerateRoutes', { role })
    },
    //编辑框取消事件
    addCancel() {
      this.addLoading = false
      this.addRoleShow = false
    },
    //成功后关闭窗体事件
    modelSuccessClose() {
      //关闭添加/编辑窗体
      this.addRoleShow = false
      //重置填写数据
      this.reSetAll('roleInfoForm', roleInfoForm)
      //重新获取角色信息数据
      this.getList()
    },
    handleDelete(rowIndex, rowData) {
      this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteRole({ roleId: rowData.id }).then(res => {
            if (res.state === 100) {
              this.$message({
                type: 'success',
                message: res.message
              })
              this.init()
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '操作已取消'
          })
        })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
