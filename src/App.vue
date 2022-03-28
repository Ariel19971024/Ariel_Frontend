<template>
  <div class="container">
    <nav>
      <router-link to="/" class="router">關於</router-link>
      <router-link to="/about" class="router">文章</router-link>
      <router-link to="/about" class="router">專案分享</router-link>
    </nav>
    <div class="content">
      <div class="menu">
        <Menu/>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
@import "./css/layout.css";
</style>
