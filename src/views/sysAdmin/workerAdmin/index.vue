<template>
  <div>
    <div style="margin-top:20px;">
      <el-form
        :model="searchFrom"
        :inline="true"
        label-width="80px"
      >
        <el-form-item
          label="用户名称"
          prop="name"
        >
          <el-input
            v-model="searchFrom.name"
            style="width:200px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            plain
            @click="search"
          >搜索</el-button>
        </el-form-item>
      </el-form>
      <div style="width:920px">
        <!-- 角色列表 -->
        <el-table
          :data="tableData"
          v-loading="listLoading"
          stripe
          border
        >
          <el-table-column
            prop="name"
            label="用户名"
            width="300"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="idCard"
            label="身份证/营业执照"
            width="200"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="certification"
            label="是否锁定"
            width="150"
            align="center"
          >
            <template slot-scope="props">
              <span>{{props.row.certification ? '已启用' :'被禁用'}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="props">
              <el-button
                size="mini"
                plain
                @click="addMore('edit', props.row)"
                type="primary"
              >配置角色</el-button>
              <el-button
                v-if="props.row.certification"
                size="mini"
                plain
                @click="lockIt(props.row,false)"
                type="danger"
              >禁用</el-button>
              <el-button
                v-if="!props.row.certification"
                size="mini"
                plain
                @click="lockIt(props.row,true)"
                type="warning"
              >启用</el-button>
              <el-button
                size="mini"
                @click="handleDelete(props.row)"
                icon="el-icon-delete"
                type="danger"
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
    </div>

    <!-- 添加、编辑、弹窗 -->
    <add-worker-win
      :editModalShow="editModalShow"
      :workerInfoForm="workerInfoForm"
      :addLoading="addLoading"
      @cancel="addCancel"
      @addClick="addClick"
      ref="addWorker"
    ></add-worker-win>
  </div>
</template>

<script>
import {
  getUserList,
  delUser,
  editInsiderInfo,
  certification
} from '@/api/sys/sys'
import addWorkerWin from '@/components/sysAdmin/window/addWorker.vue'
import workerInfoForm from './formData'
import sysAdminMixin from '../sysAdmin.mixin'
export default {
  mixins: [sysAdminMixin],
  components: {
    addWorkerWin
  },
  data() {
    return {
      tableData: [], //表格角色信息数据
      searchFrom: {
        name: ''
      },
      listLoading: false, //表格加载状态
      editModalShow: false, //是否显示添加、编辑框
      addLoading: false, //添加按钮的加载状态
      nowType: '', //当前是点击添加还是编辑
      workerInfoForm: Object.assign({}, workerInfoForm) //当前编辑框的内容,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getList()
    },
    //获取工作人员列表
    getList() {
      this.listLoading = true
      //获取工作人员列表
      getUserList(this.searchFrom).then(res => {
        this.listLoading = false
        if (res.state === 100) {
          this.tableData = res.data.list
          this.total = res.data.total
        }
      })
    },
    //搜索
    search() {
      this.getList()
    },
    // 添加/编辑用户角色
    addMore(type, row) {
      this.nowType = type //设置状态
      //编辑状态才有row
      if (row) {
        let data = JSON.parse(JSON.stringify(row))
        this.workerInfoForm = Object.assign({}, data) //使用带id的数据回填
      } else {
        //重置填写数据
        this.reSetAll('workerInfoForm', workerInfoForm)
      }
      this.editModalShow = true //展示信息录入框
    },
    //确认添加、编辑事件
    addClick(formData) {
      this.addLoading = true
      //添加
      if (this.nowType == 'add') {
      } else {
        //编辑
        editInsiderInfo(formData).then(res => {
          this.addLoading = false
          if (res.state == 100) {
            this.$Message.success({
              content: '配置成功！',
              duration: 2
            })
            //成功后关闭窗体事件
            this.modelSuccessClose()
          }
        })
      }
    },
    //编辑框取消事件
    addCancel() {
      this.addLoading = false
      this.editModalShow = false
    },
    //成功后关闭窗体事件
    modelSuccessClose() {
      //关闭添加/编辑窗体
      this.editModalShow = false
      //重置填写数据
      this.reSetAll('workerInfoForm', workerInfoForm)
      //重新获取角色信息数据
      this.getList()
    },
    //解锁、锁定
    lockIt(row, enable) {
      this.$confirm(
        '此操作将 【' +
          (enable ? '启用' : '禁用') +
          '】 【' +
          row.name +
          '】该用户，是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          certification({ id: row.id, enable }).then(res => {
            if (res.state === 100) {
              this.$message({
                type: 'success',
                message: res.message
              })
              this.getList()
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '操作已取消'
          })
        })
    },
    handleDelete(row) {
      this.$confirm(
        '此操作将永久删除【' + row.name + '】该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          delUser({ id: row.id }).then(res => {
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
