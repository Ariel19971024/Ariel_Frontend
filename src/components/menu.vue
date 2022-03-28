<template>
  <div class="menu">
    <el-menu
      background-color="#D8D2D2"
      default-active="1"
      class="el-menu-vertical-demo"
      active-text-color="#B8860B"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>文章</span>
        </template>
        <el-sub-menu index="1-4">
          <template #title>Github</template>
          <el-menu-item index="1-1">專案部署到github以gitpage</el-menu-item>
          <el-menu-item index="1-2">專案從local端推到github</el-menu-item>
          <el-menu-item index="1-3">github clone專案</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-2">
          <template #title>Vue</template>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
