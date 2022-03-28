<template>
  <div class="container">
    <nav>
      <router-link to="/" class="router">關於</router-link>
      <router-link to="/about" class="router">文章</router-link>
      <router-link to="/about" class="router">專案分享</router-link>
    </nav>
    <div class="content">
      <Menu />
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import "./css/layout.css";
</style>
