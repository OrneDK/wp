# webpack复习笔记


## 01 基础配置

```
let path = require('path')      // 获取绝对路径

module.exports = {
    mode: 'development',    // 模式 production development
    entry: './client/index.js', // 入口
    output: {
        filename: 'bundle.js',  // 打包后的文件
        path: path.resolve(__dirname, 'build')  // 必须是一个绝对路径
    }
}

```


## 02

```lang:javascript
// 先定义了一个缓存
var installedModules = {};


```



## 03 HTML 插件

```
HtmlWebpackPlugin

```