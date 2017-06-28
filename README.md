# react-redux
react全家桶
## webpack Feature

   - 可以解析JSX语法
   - 可以解析ES6语法新特性
   - 局部样式支持CSS(结合CSS MODULE实现模块化)
   - 单独分离CSS样式文件
   - 支持文件MD5戳，解决静态文件缓存问题
   - 支持图片、图标字体等资源的编译
   - 支持浏览器源码调试
   - 实现组件级热更新
   - 实现代码的热替换，浏览器实时刷新查看效果
   - 区分开发环境和生产环境
   - 分离业务功能代码和公共依赖代码  
   - MOCK数据
    
##  目录结构
```
  react-redux
  |-- index.html              // 启动页(主页)
  |-- build                   //构建目录，遵循发布系统规范
  |    |-- index.html         //静态页面
  |    |-- static             //资源文件发布到cdn,或发布到服务器  
  |
  |-- src                     //源码目录
  |    |-- ...                // 组件
  |    |-- views              // 路由入口页
  |    |-- components         // 每个入口页面需要的组件
  |    |-- App.jsx            //js 入口文件
  |
  |-- webpack.dev.config     // 本地热编译
  |-- webpack.prod.config    // 编译发布测试环境
 
```


## 项目构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start

# build for production with test
npm run build

```

  
## 项目架构 
  
   - 项目采用 React 框架 , react-redux做数据状态管理,react-router做路由转发
   - 用 webpack 编译打包项目,实现生产,预发,线上不同环境下的调试开发

