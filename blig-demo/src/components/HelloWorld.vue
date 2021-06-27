
<template>
<div class="common-layout">
    <el-header style="margin:0px 10px 0px 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">文章管理</el-menu-item>
  <el-submenu index="2">
    <template #title>权限管理</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template #title>选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-submenu index="3">
    <template #title>文件管理</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template #title>选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
</el-menu>
    </el-header>
    <div style="height:calc(100% - 60px)">
    <el-container >
      <i v-show="!show" @click="show=!show" class="el-icon-d-arrow-right" style="position: absolute;
    z-index: 100;
    top: 48%;
    left: 5px;font-size:30px"></i>

      <i v-show="show" @click="show=!show" class="el-icon-d-arrow-left
" style="position: absolute;
    z-index: 100;
    top: 48%;
    left: 285px;font-size:30px"></i>
 <transition name="el-fade-in-linear">
      
      

              <el-aside v-show="show" class="transition-box" width="300px" style="margin:10px 5px 10px 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
        <el-scrollbar >
          
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
    </el-menu>
         </el-scrollbar>
      </el-aside>
      </transition>
      <el-main style="margin:10px 10px 10px 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);padding:5px" ref="main">
        <vxe-toolbar ref="toolbar" style="text-align:left">
          <template #buttons>

           <el-button>默认按钮</el-button>
  <el-button type="primary" @click="test">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">{{tableheight}}</el-button>
          </template>
        </vxe-toolbar>
        <vxe-table
         :height="tableheight"
          :align="allAlign"
          :data="tableData1">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
          <vxe-pager ref="pager"
            align="left"
            size="medium"
           :current-page="page1.currentPage"
            :page-size="page1.pageSize"
            :total="page1.totalResult">
          </vxe-pager>
      </el-main>
    </el-container>
  </div>
</div>
</template>
<script>

    import { defineComponent, ref ,onMounted } from 'vue'

        export default defineComponent({
           data  () {
            return {
              show:true,
              page1:{
              currentPage: 1,
              pageSize: 10,
              totalResult: 200
            }
             
            }
          },
        methods:{
          test(){
            console.log(this.tableData1)
          }
        },
          setup () {
           const toolbar = ref(null)  //eleTable是页面ref后面对应的名字
           const main = ref(null)  //eleTable是页面ref后面对应的名字
                      const pager = ref(null)  //eleTable是页面ref后面对应的名字


           onMounted(() => {
             tableheight.value= main.value.$el.offsetHeight-toolbar.value.$el.offsetHeight-10-pager.value.$el.offsetHeight;
             console.log(tableheight)
             
         });
            
            const allAlign = ref(null)

            const tableData1 = ref([
              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ])
             let tableheight = ref(4);
            return {
              allAlign,
              tableData1,
              toolbar,main,tableheight,pager
            }
          }
        })
        
</script>

<style>
html ,body,#app,.el-container,.common-layout{
  height: 100%;
  padding: 0px;
  margin:0px
}
.el-header {
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    text-align: center;
    height: calc (100% - 60px);
  }

  .el-main {
    text-align: center;
    height: calc (100% - 60px);
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
