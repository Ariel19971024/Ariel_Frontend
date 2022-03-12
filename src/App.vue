<template>
<div class="container">
    <nav>
    <router-link to="/" class="router">關於</router-link>
    <router-link to="/about" class="router">文章</router-link>
    <router-link to="/about" class="router">專案分享</router-link>
  </nav>
</div>
</template>

<style>
*{
  margin:0 !important;
  padding:0;
}
nav{
  width:100%;
  height: 67px;
  background-color:rgb(246, 244, 244);
  display: flex;
  justify-content: center;
  align-items: center;
}
.router{
  color:black;
  padding: 10px;
  text-decoration: none; 
  margin-right:10px;

}
.router:hover{
 background-color:rgb(212, 208, 208);
 border-radius:10%;
}
</style>
