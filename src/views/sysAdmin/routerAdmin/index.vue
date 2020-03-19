<template>
  <div>
    <el-row>
      <el-col
        :span="24"
        style="margin-bottom:15px"
      >
        <el-button
          type="primary"
          plain
          @click="addMore('add', '')"
        >添加路由</el-button>
        <el-form
          :model="seachForm"
          ref="routerInfoForm"
          label-width="100px"
          style="display: inline-block;"
        >
          <el-form-item label="筛选路由类型">
            <el-radio-group
              v-model="seachForm.type"
              size="small"
              @change="routerTypeChange"
            >
              <el-radio
                border
                :label="''"
              >全部</el-radio>
              <el-radio
                border
                :label="'0'"
              >目录</el-radio>
              <el-radio
                border
                :label="'1'"
              >菜单</el-radio>
              <el-radio
                border
                :label="'2'"
              >页面</el-radio>
              <el-radio
                border
                :label="'3'"
              >按钮/区块</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-table
            :data="routerList"
            v-loading="routerListLoading"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            border
            :default-expand-all="false"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column
              prop="title"
              label="名称"
            >
              <template slot-scope="props">
                <span>{{ props.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="type"
              label="路由类型"
              align="center"
            >
              <template slot-scope="props">
                <el-button
                  v-if="props.row.type == 0"
                  type="primary"
                  size="mini"
                  plain
                >目录（{{ props.row.children.length }}）</el-button>
                <el-button
                  v-if="props.row.type == 1"
                  type="success"
                  size="mini"
                  plain
                >菜单</el-button>
                <el-button
                  v-if="props.row.type == 2"
                  type="warning"
                  size="mini"
                  plain
                >页面</el-button>
                <el-button
                  v-if="props.row.type == 3"
                  type="info"
                  size="mini"
                  plain
                >按钮/区块</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="hidden"
              label="是否展示在菜单"
              align="center"
            >
              <template slot-scope="props">
                <span>{{ props.row.hidden ? "否" : "是" }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="parentName"
              label="父级名称"
              align="center"
            >
              <template slot-scope="props">
                <span>{{ props.row.parentId ? props.row.parentName : "顶级路由" }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="icon"
              label="图标"
              align="center"
            >
              <template slot-scope="props">
                <i
                  :class="props.row.icon"
                  v-if="props.row.icon"
                ></i>
                <span v-else>暂无</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="path"
              label="前端路径"
              align="center"
            >
              <template slot-scope="props">
                <span>{{ props.row.path ? props.row.path : "暂无" }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderNum"
              label="同级排序"
              align="center"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="perms"
              label="授权标识"
              align="center"
            >
              <template slot-scope="props">
                <span>{{ props.row.perms ? props.row.perms : "暂无" }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="props">
                <el-button
                  type="primary"
                  size="mini"
                  plain
                  @click="addMore('edit', props.row)"
                >编辑</el-button>
                <el-button
                  type="danger"
                  size="mini"
                  plain
                  @click="deleteIt(props.row)"
                  v-if="doNotDel.indexOf(props.row.name) == -1"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- 添加、编辑、弹窗 -->
    <add-router
      :addRouterShow="addRouterShow"
      :routerInfoForm="routerInfo"
      :routerList="routerList"
      :addLoading="addLoading"
      @cancel="addCancel"
      @addClick="addClick"
      ref="addRouter"
    ></add-router>
  </div>
</template>

<script>
import {
  getRouterList,
  addRoleMenu,
  editRoleMenu,
  delRoleMenu
} from '@/api/sys/sys.js'

import addRouter from '@/components/sysAdmin/window/addRouter.vue'
import routerInfoForm from './formData'
import sysAdminMixin from '../sysAdmin.mixin'
export default {
  mixins: [sysAdminMixin],
  components: {
    addRouter
  },
  data() {
    return {
      seachForm: {
        type: ''
      },
      routerList: [], //获取已处理过的的路由列表
      routerListLoading: false, //表格加载状态
      addRouterShow: false, //是否显示编辑
      addLoading: false, //添加按钮的加载状态
      nowType: '', //当前是点击添加还是编辑
      nowId: '', //当前菜单id
      routerInfo: Object.assign({}, routerInfoForm), //当前编辑框的内容
      doNotDel: [
        'home',
        'homeIndex',
        'sysAdmin',
        'roleAdmin',
        'routerAdmin',
        'workerAdmin'
      ] //不允许被删除的路由英文名关键字
    }
  },
  mounted() {
    this.init() //初始化
  },
  methods: {
    init() {
      this.seachForm.pageSize = 10
      this.seachForm.pageNumber = 1
      this.getList(this.seachForm)
    },
    //获取路由列表
    getList(seachData) {
      this.routerListLoading = true
      getRouterList(seachData).then(res => {
        this.routerListLoading = false
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
    // 添加路由
    addMore(type, row) {
      this.nowType = type //设置状态
      //编辑状态才有row
      if (row) {
        let data = JSON.parse(JSON.stringify(row))
        delete data.children
        this.routerInfo = Object.assign({}, data) //使用带id的数据回填
      } else {
        //重置填写数据
        this.reSetAll('routerInfo', routerInfoForm)
      }
      this.addRouterShow = true //展示信息录入框
    },
    //编辑框取消事件
    addCancel() {
      this.addLoading = false
      this.addRouterShow = false
    },
    //确认添加、编辑事件
    addClick(formData) {
      this.addLoading = true
      //添加
      if (this.nowType == 'add') {
        addRoleMenu(formData).then(res => {
          this.addLoading = false
          if (res.state == 100) {
            this.$Message.success({
              content: '添加成功！',
              duration: 2
            })
            //成功后关闭窗体事件
            this.modelSuccessClose()
            //重置路由
            this.reSetRouter()
          }
        })
        //编辑
      } else {
        editRoleMenu(formData).then(res => {
          this.addLoading = false
          if (res.state == 100) {
            this.$Message.success({
              content: '编辑成功！',
              duration: 2
            })
            //成功后关闭窗体事件
            this.modelSuccessClose()
            //重置路由
            this.reSetRouter()
          }
        })
      }
    },
    //删除该路由
    deleteIt(row) {
      //移动文件弹窗确认
      this.$Modal.confirm({
        title: '路由删除提示',
        content: `<p>您正在删除 <span style="color:red">${row.title}</span> 路由， <span style="color:red">该路由下包含的所有子路由将被一并删除，并取消相关角色的绑定。请谨慎操作！</span> 是否继续？</p>`,
        onOk: () => {
          this.$Message.loading({
            content: '正在删除...',
            duration: 0
          })
          delRoleMenu({ id: row.id }).then(res => {
            if (res.state == 100) {
              this.$Message.destroy()
              this.$Message.success({
                content: '删除成功！',
                duration: 2
              })
              //重新获取路由数据
              this.getList(this.seachForm)
              //重置路由
              this.reSetRouter()
            }
          })
        },
        onCancel: () => {
          this.$Message.info('删除撤销')
        }
      })
    },
    //重置路由数据
    reSetRouter() {
      let role = this.$store.getters.getUserInfo.roleType
      this.$store.dispatch('GenerateRoutes', { role })
    },
    //成功后关闭窗体事件
    modelSuccessClose() {
      //关闭添加/编辑窗体
      this.addRouterShow = false
      //重置填写数据
      this.reSetAll('routerInfo', routerInfoForm)
      //重新获取表格路由数据
      this.getList(this.seachForm)
    },
    routerTypeChange() {
      this.getList(this.seachForm)
    }
  }
}
</script>

<style lang="scss" scoped></style>
