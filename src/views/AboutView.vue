<template>
  <div class="about">
    <div class="topic"><strong>專案部署到github以gitpage呈現</strong></div>
    <a href="https://tzuhui.github.io/2020/03/02/Vue/Vue-CLI3-to-github-pages/"
      >https://tzuhui.github.io/2020/03/02/Vue/Vue-CLI3-to-github-pages/</a
    >
    <div class="topic"><strong>專案部署到github以gitpage呈現遇到問題</strong></div>
    <a href="https://dotblogs.com.tw/CYLcode/2020/06/07/120134"
      >https://dotblogs.com.tw/CYLcode/2020/06/07/120134</a
    >
    <div class="topic"><strong>專案從local端推到github</strong></div>
    <button @click="textShow=!textShow">編輯</button>
    <button @click="upLoadHandler" :disabled="!textShow">上傳</button>
    <div v-if="textShow">
      <textarea class="textarea" v-model="textValue"></textarea>
    </div>
    <div>{{addArticle}}</div>
    <div>
      流程:<br/>
      #git init-會建立一個.git的資料夾(一開始沒有),刪掉後之前的commit等都會消失<br/>
      問題一:<br/>
      #若沒有會和現在的git相衝突,origin已存在的衝突(若之前有用別的github帳號推過則會爆出remote: Permission to YourUsername/RepoName.git denied to YourUsername.的錯)
      #解法:<br/>
      打開->控制台->使用者帳戶->管理您的認證->windows認證->找到github的認證清除<br/>
      #參考:<br/>
      <a href="https://ithelp.ithome.com.tw/articles/10280309?sc=iThomeR"
      >https://namepluto.com/%E5%85%A9%E5%88%86%E9%90%98%E8%A7%A3%E6%B1%BA-git-push-permission-denied-error-403-%E5%95%8F%E9%A1%8C/</a>
      #git status-查看專案變動<br/>
      #git add.-加入專案變動<br/>
      #git commit -m"xxxxx".-提交專案變動<br/>
      #git branch -M 分支名稱.-建立分支<br/>
      #git remote add origin https://Ariel19971024:access_token@github.com/Ariel19971024/your_repoName.git -設定遠端倉庫須設定token否則會pending<br/>
      #git remote -v -能查看遠端倉庫<br/>
      #git push -u origin main -推到遠端倉庫<br/>
    </div>
    <div>參考資源:</div>
    <a href="https://ithelp.ithome.com.tw/articles/10280309?sc=iThomeR"
      >https://ithelp.ithome.com.tw/articles/10280309?sc=iThomeR</a
    >
    <div class="topic"><strong>從github clone專案</strong></div><br/>
    <div>
    #git clone repo_url<br/>
    #cd folder<br/>
    #git branch -a -查看所有分支<br/>
    #git checkout 分支名稱<br/>
    #註記:git clone 遠端專案URL -b 分支名稱<br/>
    </div>
  </div>
</template>
<script>
export default {
 data(){
   return{
     textShow:false,
     textValue:"",
     addArticle:"",
   }
 },
 methods:{
   upLoadHandler(){
     this.addArticle=this.textValue;
   }
 }
}
</script>
<style scoped>
.textarea{
  width:500px;
  height: 300px;
}
.topic{
  color:rgb(196, 116, 116);
}
</style>
