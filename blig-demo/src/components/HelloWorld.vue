
<template>
<div class="common-layout">
    <el-header style="margin:0px 10px 0px 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
顶部菜单
    </el-header>
    <div style="height:calc(100% - 60px)">
    <el-container >
              <el-aside width="300px" style="margin:10px 5px 10px 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
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
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <template #title>写文章</template>
      </el-menu-item>
    </el-menu>
         </el-scrollbar>
      </el-aside>
      <el-main style="margin:10px 10px 10px 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" ></el-main>
    </el-container>
  </div>
</div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
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
