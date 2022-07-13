# Vue3 Boilerplate

## Introduction

项目采用 vue3+webpack5，vue3 以更好地解决响应式数据问题，在非复杂的模块中，仍然可以使用 vue2 语法编写组件。

## Config

需要修改构建相关配置时，请修改 vue.config.js 文件。

-   `多页面支持`：默认为单页面，当需要开启多页面时，可以开启 Multiple pages 部分，当开启了多页面时，请注释 html-webpack-plugin 部分内容。
-   `跨域代理`：跨域代理部分请修改配置中 Proxy 部分。
-   `静态资源路径`：当部署到线上时，根据需要修改`.env.production`中`STATIC_PATH`
    -   `repo`：当项目部署为本地一个域名下子路径时，使用`/项目名称`（package.json 中的 name）作为根路径
    -   `root`：当项目使用独立域名，并引用本地文件时
    -   `cdn`: 当前项目的静态资源使用 cdn 路径
-   `样式扩展`：默认引用[common](https://github.com/deepberry/common)库 global.less，同时引入本地 css/var.less，用于定义公共全局变量或项目级全局变量。
-   `项目设置`：业务型项目设置请统一填写在`project.json`中。
-   `伪静态`：当页面有锚点需求时，请修改路由为 history 模式，在一般情况下也总是推荐如此，对应根据实际情况修改 base 值与服务器端规则。

## Dev

### 初始化

1. 🌈 修改 **_package.json_** 中的 name 字段为项目名称
2. 🌈 指定 **_.github/workflows/build.yaml_** 中的 **`$project`** 为项目名称
3. 🌈 指定 **_.env_** 中的 **`STATIC_PATH`**

### 项目启动

1. 🌈 `npm install` 安装依赖（首次/必要时）
2. 🌈 `npm run update` 更新公共库依赖（必要时）
3. ✨ `npm run serve` 启动本地服务
4. ✨ `npm run build` 测试构建

## Deploy

默认使用 github actions 进行构建，见[build.yaml](./.github/workflows/build.yaml)

### 自动构建

默认使用 actions 构建，会自动部署在 dist 分支。

-   如为私有仓库且 github 没有开通付费，请自行给每个项目添加`ACCESS_TOKEN`，需要赋予 token workflow 权限。
-   如自行在本地构建，请参考[私有包安装指南](https://github.com/deepberry/FE-docs/blob/master/packages/DeepBerry%E7%A7%81%E6%9C%89%E5%8C%85%E5%AE%89%E8%A3%85.md)进行构建环境的 npm registry 配置。

### 自动部署

主机部署见监控平台

### 全球加速

全站 CDN 默认同时会将构建文件部署至阿里云 OSS/deepberry。

-   请修改配置中 oss 的部署路径，将`$project`修改为项目名（package.json 中的 name）。
-   必要时，请将 DNS CNAME 指向 CDN（需配置证书），CDN 回源至 OSS，映射整个 Bucket 即可。
