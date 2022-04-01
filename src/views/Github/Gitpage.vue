<template>
  <div class="content-area">
    <div class="topic-area">
      <div class="topic"><strong>專案部署到github以gitpage呈現</strong></div>
      <div class="date">2022-03-29</div>
    </div>
    <!-- <img src="../../assets/workspace-1280538__340.webp" alt="" class="topic-img" style="width=100%,height=500px"> -->
    <div class="article-area">
      <div class="paragraph">
        <div class="sub-topic"><strong>前言</strong></div>
        <div class="paragraph-sub sub-1">
          <div class="decorate"></div>
          <div class="introduce">
            將開發完成的專案打包成靜態檔案後，推到Github上以Gitpage的方式呈現
          </div>
        </div>
      </div>
      <div class="paragraph paragraph-2">
        <div class="sub-topic"><strong>部署方法</strong></div>
        <div class="paragraph-sub">
          <div class="decorate-2"></div>
          <div class="introduce">
            在vue-cli3的版本中,須先建立一個vue.config.js的檔案,並設定publicPath
          </div>
          <img
            src="../../assets/程式02.png"
            alt=""
            class="topic-img"
            width="80%"
          />
        </div>
        <div class="paragraph-sub">
          <div class="decorate-2"></div>
          <div class="introduce">
            建立一支deploy.sh的檔案，以將專案打包後推到gh-page的分支上
          </div>
          <img
            src="../../assets/程式03.png"
            alt=""
            class="topic-img"
            width="80%"
          />
        </div>
      </div>
          <input type="text" v-model="link">
          <button v-clipboard:copy="link" v-clipboard:success="success">click</button>
    </div>
  </div>
</template>
<script>
export default {
data(){
  return{
    link:"https://google.com"
  }
},methods:{
  success(){
    console.log("hi")
  }
}
}
</script>
