# Electron-vue3-typescript-template 

这是一个开箱即用的 electron 基础模板，模版中集成了 vite、vue3和typescript，使用 electron 官方推荐的打包工具 electron-forge 进行应用的打包，同时集成了 prettier + eslint做代码风格检查



## Develop

```bash
# 拉取代码仓
git clone git@github.com:night-peiqi/fontmini-app.git

# 安装依赖
npm install

# 本地运行
npm run start

# 应用打包，会打包项目且生成可执行文件.exe
npm run package

# 制作安装包
npm run make
```

## git-cz

```bash
# 使用git-cz提交代码
yarn commit

yarn push
```

## Pack

打包应用

```bash
# 首先，创建tag、更新版本号同时生成changelog，三选一，执行下面其中一条命令都会 自动更新版本号、创建tag以及生成changelog
# major 大版本更新
yarn release-major

# minor 较小版本更新
yarn release-minor

# patch 更新补丁
yarn release-patch

# 把tag推到远程
git push --follow-tags origin master

# 打包
# 1. 打包；有两种打包方式，二选一即可
# 1.1. package 将应用打包为一个目录，包含一个可执行文件，无需安装可直接运行
yarn package
# 1.2. make 生成一个分发包，用来安装应用
yarn make
```
