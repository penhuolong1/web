import { sortNum } from '@/utils/tools.js'
export default {
  data(){
    return{
      routerList: [],
      total: 0,
      searchFrom: {
        pageNumber:1,
        pageSize: 10
      }
    }
  },
  methods: {
    handleSizeChange(v){
      this.searchFrom.pageSize = v
      this.getList()
    },
    handleCurrentChange(v){
      this.searchFrom.pageNumber = v
      this.getList()
    },
     //递归处理子路由
    delRouterList(list) {
      let newList = []
      //先找最顶级，放入新数组
      list.forEach((item, index) => {
        if (!item.parentId) {
          newList.push(item)
        }
      })
      //升序排序
      newList = sortNum(newList, 'orderNum')
      //递归处理它的子级
      this.delRouterChildren(newList, list)
      //最终处理结果展示在表格
      this.routerList = newList
      console.log('处理过层级关系的路由列表', this.routerList)
    },
    delRouterChildren(newList, list) {
      //根据顶级找子级
      newList.forEach((item, index) => {
        item.children = []
        list.forEach((item1, index1) => {
          //如果是它的子级，放入他的children中
          if (item.id == item1.parentId) {
            item.children.push(item1)
          }
        })
        //升序排序
        item.children = sortNum(item.children, 'orderNum')
        //如果有子级,将他的子级作为顶级递归向下找子级
        if (item.children.length > 0) {
          this.delRouterChildren(item.children, list)
        }
      })
    },
    //重置填写数据
    reSetAll(resetObj,resetData) {
      this[resetObj] = Object.assign({}, resetData)
    }
  },
}
