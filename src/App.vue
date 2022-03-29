<template>
  <div class="container">
    <div class="aside" v-if="toggleMenu" :class="{'aside-transition':toggleMenu}">
      <div class="search-area">
        <input type="text" placeholder="search">
      </div>
        <Menu />
    </div>
    <div class="right-block">
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
            <li><router-link to="/" class="router" @click="toggleMenu = false">關於</router-link></li>
            <li><div class="router" @click="toggleMenu = true">文章</div></li>
            <li><div  class="router">專案分享</div></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="content">
        <div class="main">
          <router-view />
        </div>
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
