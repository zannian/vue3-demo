<template>
  <div class="main">
    <aside class="menu">
      <el-menu
        default-active="home"
        class="el-menu-vertical-demo"
        :collapse="isCollapse.val"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <el-menu-item index="home">
          <el-icon><icon-menu /></el-icon>
          <template #title>Home</template>
        </el-menu-item>
        <el-menu-item index="mamber">
          <el-icon><document /></el-icon>
          <template #title>人员管理</template>
        </el-menu-item>
        <el-sub-menu index="item">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Items</span>
          </template>
          <el-menu-item index="item1">item one</el-menu-item>
          <el-menu-item index="item2">item two</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="right">
          <el-icon><setting /></el-icon>
          <template #title>权限管理</template>
        </el-menu-item>
      </el-menu>
    </aside>
    <div class="right-side">
      <div class="header">
        <el-icon class="cols-btn" @click="clickButton" style="width: 2em; margin-right: 12px"
          ><Expand v-if="isCollapse" style="font-size: 2em" /><Fold v-else style="font-size: 2em"
        /></el-icon>
        <el-page-header @back="goBack">
          <template #content>
            <span class="text-large font-600 mr-3"> Title </span>
          </template>
        </el-page-header>
      </div>
      <div class="main-wrapper">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterView, useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Fold,
  Expand
} from '@element-plus/icons-vue'
import { ref } from 'vue'
let isCollapse = ref({
  val: false
})
const router = useRouter()
const handleSelect = (e) => {
  router.push(e)
}

const clickButton = () => {
  console.log(isCollapse)
  isCollapse.value.val = !isCollapse.value.val
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  min-height: 100%;
  display: flex;
  .el-menu-vertical-demo {
    height: 100%;
  }
  .right-side {
    flex: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    .header {
      height: 60px;
      padding-left: 30px;
      border-bottom: 1px solid #dcdfe6;
      display: flex;
      align-items: center;
      .cols-btn {
        cursor: pointer;
      }
    }
    .main-wrapper {
      padding: 30px;
      flex: 1;
    }
  }
  .menu {
    background: #fff;
  }
}
</style>
