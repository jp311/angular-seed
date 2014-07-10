# AngularJS 开发规范

使用 [RequireJS](http://requirejs.cn/) 进行依赖管理。

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

- **视图文件**，包含 HTML 片段代码，命名为“*视图名称.html*”，例如：*login.html*
- **控制器文件**，命名为“*控制器名称Ctrl.js*”，例如 *loginCtrl.js*

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
