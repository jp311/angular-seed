# AngularJS 开发规范

使用 [RequireJS](http://requirejs.cn/) 进行依赖管理。
使用 [Karma](http://karma-runner.github.io/) 进行单元测试。

- [AngularJS 入门教程](http://angularjs.cn/T006)
- [AngularJS 开发指南](http://angularjs.cn/T008)

## 目录结构

- **组件包名称**
 - **/controllers**：包含控制器代码。
   - **controllers.js**：控制器配置、定义模块。
 - **/directives**：包含指令代码。
   - **directives.js**：指令定义模块。
 - **/filters**：包含过滤器代码。
   - **filters.js**：过滤器定义模块。
 - **/services**：包含服务代码。
   - **services.js**：服务定义模块。
 - **/views**：包含视图文件，HTML 代码片段。
 - **main.js** 组件包定义模块。

## 文件规范

- **视图**，包含 HTML 片段代码，命名为“*视图名称.html*”，例如：*login.html*
- **控制器**，命名为“*控制器名称Ctrl.js*”，例如 *loginCtrl.js*
- **服务**，命名为“*服务名称*Srv.js”，例如：*loginSrv.js*

## 名称定义

- **RequireJS 模块**：由 define 函数定义。
- **AngularJS 模块**：由 angular.module 函数定义。

## 注意事项

- 获取当前 RequireJS 模块相对地址：
```
define(function(require) {
    require.toUrl('..'); // 当前 RequireJS 模块的相对地址
});
```

## Karma

karma.conf.js 一般放置在组件包的父目录中，例如：*packages/karma.conf.js*。

当第三方脚本库目录路径为 *packages/../scripts*， 需要将 basePath 设置为 **'..'**，才可正常引入脚本文件。
