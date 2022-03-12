#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e
git push -f https://github.com/Ariel19971024/Ariel_Frontend.git master:develop
# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Ariel19971024/Ariel_Frontend.git master:gh-pages
cd -