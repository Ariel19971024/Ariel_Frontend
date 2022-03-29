<template>
  <div class="container">
    <!-- <nav>
      <div class="nav-inner">
      <span class="material-icons" @click="toggleMenu = !toggleMenu"
        >reorder</span
      >
      <span class="logo">ARIEL'S GOODNOTE</span>
      <router-link to="/" class="router">關於</router-link>
      <router-link to="/about" class="router">文章</router-link>
      <router-link to="/about" class="router">專案分享</router-link>
      </div>
    </nav> -->
    <nav>
      <div class="nav-inner">
        <div class="nav-item nav-btn">
          <span class="material-icons" @click="toggleMenu = !toggleMenu"
        >reorder</span>
        </div>
        <div class="nav-item nav-logo">
          <span class="logo">ARIEL'S GOODNOTE</span>
        </div>
        <div class="nav-item nav-menu">
          <ul>
            <li><router-link to="/" class="router">關於</router-link></li>
            <li><router-link to="/about" class="router">文章</router-link></li>
            <li><router-link to="/about" class="router">專案分享</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="content">
      <div class="aside">
        <Menu v-if="toggleMenu" />
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
  data() {
    return {
      toggleMenu: false,
    };
  },
};
</script>

<style>
@import "./css/layout.css";
/* google-fonts需載入css資料夾和font資料夾跟asset img */
@import "./css/material-icons.css";
@import "./css/material-icons-ie.css";
</style>
