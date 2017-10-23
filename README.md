# vue-hackernews-2.0

HackerNews clone built with Vue 2.0 + vue-router + vuex, with server-side rendering.

<p align="center">
  <a href="https://vue-hn.now.sh" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/499550/17546273/5aabc5fc-5eaf-11e6-8d6a-ad00937e8bd6.png" width="700px">
    <br>
    Live Demo
  </a>
</p>

## Features

> Note: in practice, it is unnecessary to code-split for an app of this size (where each async chunk is only a few kilobytes), nor is it optimal to extract an extra CSS file (which is only 1kb) -- they are used simply because this is a demo app showcasing all the supported features. In real apps, you should always measure and optimize based on your actual app constraints.

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
  - Automatically inlines CSS used by rendered components only
  - Preload / prefetch resource hints
  - Route-level code splitting
- Progressive Web App
  - App manifest
  - Service worker
  - 100/100 Lighthouse score
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Animation
  - Effects when switching route views
  - Real-time list updates with FLIP Animation

## Architecture Overview

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

**A detailed Vue SSR guide can be found [here](https://ssr.vuejs.org).**

## Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## 目录

<pre>
.
├── build               // 开发生产
├── public              // 静态资源
├── src                 // vue源码
  │  app.js                     # 整合 router,filters,vuex 的入口文件
  │  App.vue                    # 根 vue 组件
  │  entry-client.js            # client 的入口文件
  │  entry-server.js            # server 的入口文件
  │  index.template.html        # html 模板
  │
  ├─ api
  │  create-api-client.js       # Client数据源配置
  │  create-api-server.js       # server数据源配置
  │  index.js                   # 数据请求API
  │
  ├─ components
  │  Comment.vue                # 评论组件
  │  Item.vue                   #
  │  ProgressBar.vue            # 进度条组件
  │  Spinner.vue                # 加载提示组件
  │
  ├─ router
  │  index.js                   # router配置
  │
  ├─ store                      # Vue store模块
  │  actions.js                 # 根级别的 action
  │  getters.js                 # 属性接口
  │  index.js                   # 我们组装模块并导出 store 的地方
  │  mutations.js               # 根级别的 mutation
  │
  ├─ util
  │  filters.js                 # 过滤器
  │  title.js                   # 工具类
  │
  └─ views
    CreateListView.js       # 动态生成列表界面的工厂方法
    ItemList.vue            # List界面组件
    ItemView.vue            # 单List项组件
    UserView.vue            # 用户界面组件
│   .
├── .babelrc            //
├── .gitignore          // 忽略的文件
├── manifest.json       // progressive web apps配置文件
├── package.json        // 项目配置文件
├── README.md           // 说明
├── server.js           // 服务端渲染
</pre>

## 参考
[server.js源码解析](http://www.jianshu.com/p/8c7d979bedcf)


## License

MIT
