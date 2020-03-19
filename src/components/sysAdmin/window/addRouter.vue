<template>
  <div>
    <el-dialog
      :title="routerInfoForm.id ? '修改路由信息' : '添加路由信息'"
      :visible.sync="addRouterShow"
      center
      width="900px"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div>
        <el-form :model="routerInfoForm" :rules="rules" ref="routerInfoForm" label-width="220px">
          <!-- 公共表单 -->
          <el-form-item label="类型" prop="type">
            <el-radio-group v-model="routerInfoForm.type" size="small" @change="routerTypeChange">
              <el-tooltip effect="dark" content="用于添加菜单目录或页面目录，指定子路由的展示容器" placement="top">
                <el-radio border :label="'0'">目录</el-radio>
              </el-tooltip>
              <el-tooltip effect="dark" content="用于添加远程菜单子路由" placement="top">
                <el-radio border :label="'1'">菜单</el-radio>
              </el-tooltip>
              <el-tooltip effect="dark" content="用于添加远程页面子路由" placement="top">
                <el-radio border :label="'2'">页面</el-radio>
              </el-tooltip>
              <el-tooltip effect="dark" content="用于添加按钮或区块的权限控制" placement="top">
                <el-radio border :label="'3'">按钮/区块</el-radio>
              </el-tooltip>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="父级目录（路由）" prop="parentName">
            <el-popover placement="bottom-start" trigger="click">
              <el-tree
                :data="myTreeList"
                :props="defaultProps"
                :default-expand-all="false"
                :highlight-current="true"
                :expand-on-click-node="false"
                node-key="id"
                @current-change="handleNodeClick"
                :filter-node-method="filterNode"
                ref="tree"
              ></el-tree>
              <el-input
                slot="reference"
                readonly
                v-model="routerInfoForm.parentName"
                placeholder="请选择父级目录"
              ></el-input>
            </el-popover>
          </el-form-item>
          <!-- 目录、菜单、页面 专属 -->
          <div v-if="routerInfoForm.type !== '3'">
            <el-form-item label="路由名称（英文）" prop="name">
              <el-input v-model="routerInfoForm.name"></el-input>
            </el-form-item>
            <el-form-item label="路由名称（中文）" prop="title">
              <el-input v-model="routerInfoForm.title"></el-input>
            </el-form-item>
            <el-form-item label="前端访问路径" prop="path">
              <el-input
                v-model="routerInfoForm.path"
                placeholder="顶级目录前面需要带/,其他情况不带/，例如：顶级目录：/home ，其他情况：home"
              ></el-input>
            </el-form-item>
            <el-form-item label="前端组件地址(路由展示容器)" prop="component">
              <el-input
                v-model="routerInfoForm.component"
                placeholder="只需要写src以下的路径（不含src），不用带文件后缀，例如：home/index"
              ></el-input>
            </el-form-item>
            <el-form-item label="是否展示在菜单" prop="hidden">
              <el-radio-group v-model="routerInfoForm.hidden" size="small">
                <el-radio border :label="false">是</el-radio>
                <el-radio border :label="true">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- 只有要展示在菜单才有这些选项 -->
            <div v-if="!routerInfoForm.hidden">
              <el-form-item
                label="目录下只有一个菜单时直接显示菜单不显示目录"
                label-width="320px"
                v-if="routerInfoForm.type === '0'"
              >
                <el-radio-group v-model="routerInfoForm.alone" size="small">
                  <el-radio border :label="true">是</el-radio>
                  <el-radio border :label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="菜单图标">
                <el-input v-model="routerInfoForm.icon" style="width:40%"></el-input>
                <el-popover
                  placement="top-start"
                  title="提示"
                  width="200"
                  trigger="hover"
                  content="点我获取图标代码"
                >
                  <a
                    href="https://element.eleme.cn/#/zh-CN/component/icon"
                    target="_blank"
                    slot="reference"
                    style="margin-left:30px"
                  >
                    <i class="el-icon-info"></i>
                    如何获取
                  </a>
                </el-popover>
              </el-form-item>
              <el-form-item label="同级菜单排序" prop="orderNum">
                <el-input-number v-model="routerInfoForm.orderNum" :min="0"></el-input-number>
              </el-form-item>
            </div>
          </div>
          <!-- 按钮 专属 -->
          <div v-if="routerInfoForm.type === '3'">
            <el-form-item label="按钮/区块名称" prop="title">
              <el-input v-model="routerInfoForm.title"></el-input>
            </el-form-item>
            <el-form-item label="按钮/区块图标">
              <el-input v-model="routerInfoForm.icon" style="width:40%"></el-input>
              <el-popover
                placement="top-start"
                title="提示"
                width="200"
                trigger="hover"
                content="点我获取图标代码"
              >
                <a
                  href="https://element.eleme.cn/#/zh-CN/component/icon"
                  target="_blank"
                  slot="reference"
                  style="margin-left:30px"
                >
                  <i class="el-icon-info"></i>
                  如何获取
                </a>
              </el-popover>
            </el-form-item>
            <el-form-item label="是否注入按钮/区块的名称和图标" prop="insert" label-width="250px">
              <el-radio-group v-model="routerInfoForm.insert" size="small">
                <el-radio border :label="true">是</el-radio>
                <el-radio border :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="授权标识" prop="perms">
              <el-input v-model="routerInfoForm.perms"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          class="btnColor"
          @click="addRouerInfo('routerInfoForm')"
          :loading="addLoading"
        >{{ routerInfoForm.id ? "修改" : "添加" }}</el-button>
        <el-button @click="cancelEvent">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'addRouter',
  data() {
    return {
      rules: {
        type: [{ required: true, message: '请选择路由类型', trigger: 'blur' }],
        title: [
          { required: true, message: '请输入路由中文名', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入路由英文名', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '请输入路由访问路径', trigger: 'blur' }
        ],
        component: [
          { required: true, message: '请输入前端组件地址', trigger: 'blur' }
        ],
        hidden: [
          { required: true, message: '请选择是否展示在菜单', trigger: 'blur' }
        ],
        insert: [
          {
            required: true,
            message: '请选择是否是否注入按钮/区块的名称和图标',
            trigger: 'blur'
          }
        ],
        parentName: [
          { required: true, message: '请选择父级目录', trigger: 'blur' }
        ],
        perms: [{ required: true, message: '请输入授权标识', trigger: 'blur' }]
      },
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      myTreeList: [] //路由目录列表
    }
  },
  props: {
    routerInfoForm: {
      type: Object,
      default: {}
    },
    routerList: {
      type: Array,
      default: []
    },
    addRouterShow: {
      type: Boolean,
      default: false
    },
    addLoading: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    //监听表单数据
    routerInfoForm(val) {
      console.log('valllll', val)
      //如果有id就是编辑，回填的时候如果父级为空，设置下他的父级名称为 顶级目录
      if (val.id && val.parentId == '') {
        val.parentName = '顶级目录'
      }
      this.$nextTick(() => {
        //过滤路由，取出目录类型
        this.$refs.tree.filter('0')
        //设置当前默认选中的节点
        this.$refs.tree.setCurrentKey(val.parentId)
      })
    },
    //监听路由列表数据，追加到路由目录列表
    routerList(val) {
      this.myTreeList = [{ title: '顶级目录', id: 'top', children: [] }] //默认存在的数据
      this.myTreeList[0].children.push(...val)
    }
  },
  methods: {
    //选择角色
    addRouerInfo(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let formData = JSON.parse(JSON.stringify(this.routerInfoForm))

          //判断是菜单不能为顶级，必须指定父级目录
          if (
            (formData.type === '1' || formData.type === '2') &&
            formData.parentId === 'top'
          ) {
            this.$message({
              message:
                '菜单或页面类型的路由不能为顶级，必须指定现有目录路由或创建目录路由作为它的展示容器。',
              type: 'warning'
            })
            return false
          }

          //过滤顶级
          if (formData.parentId === 'top') {
            formData.parentId = ''
          }

          //过滤处理下路由的路径
          let root = formData.path.substr(0, 1) //substr,第一个参数是开始索引(从0开始)，第二参数是截取的字符串的长度
          //顶级目录要带/
          if (formData.type == '0' && formData.parentId == '') {
            if (root !== '/') {
              formData.path = '/' + formData.path
            }
          } else {
            //其他情况去掉/
            formData.path = formData.path.replace('/', '')
          }

          console.log(formData)
          this.$emit('addClick', formData)
        } else {
          return false
        }
      })
    },
    //子节点点击事件
    handleNodeClick(data) {
      console.log(data)
      this.routerInfoForm.parentName = data.title
      this.routerInfoForm.parentId = data.id
    },
    //路由类型切换
    routerTypeChange(val) {
      this.routerInfoForm.component = ''
      switch (val) {
        case '0': //目录
          this.routerInfoForm.hidden = false
          this.routerInfoForm.component = 'layout/layout'
          break
        case '1': //菜单
          this.routerInfoForm.hidden = false
          break
        case '2': //页面
          this.routerInfoForm.hidden = true
          break
        case '3': //按钮
          this.routerInfoForm.hidden = true
          break
      }
    },
    //对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
    filterNode(value, data) {
      console.log('value', value, 'data', data)
      return data.type == value && this.routerInfoForm.parentId !== data.id
    },
    //取消事件
    cancelEvent() {
      this.$emit('cancel', false)
    }
  }
}
</script>

<style></style>
