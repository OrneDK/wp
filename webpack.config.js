let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 模拟开发服务器配置
    // devServer: {
    //     // 指定端口号
    //     port: 3000,
    //     // 是否加载进度条
    //     progress: true,
    //     // 指定目录打开本地服务调试
    //     contentBase: './build',
    //     // Gzip压缩
    //     compress: true
    // },
    mode: 'development', // 模式 production development
    entry: './src/index.js', // 入口
    output: {
        filename: 'bundle[hash:8].js', // 打包后的文件
        path: path.resolve(__dirname, 'build') // 必须是一个绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            // index.html文件位置
            template: './src/index.html',
            // 打包后文件位置及 名称
            filename: 'index.html',
            minify: {
                // 去掉双引号
                removeAttributeQuotes: true,
                // 折叠成一行
                // collapseWhitespace: true,
            },
            // 添加hash戳
            hash: true
        })
    ],
    module: {
        rules: [{
            // 正则匹配.css文件
            test: /\.css$/,
            use: [
                // 打包css并插入到head中去
                {
                    loader: 'style-loader',
                    options: {
                        // 解析到head标签最上方(目的是方便模板中自定义样式生效)
                        insertAt: 'top'
                    }
                },
                // 解析@import 语法
                'css-loader'
            ]
        }, {
            // 正则匹配.css文件
            test: /\.styl$/,
            use: [
                // 打包css并插入到head中去
                {
                    loader: 'style-loader',
                    options: {
                        // 解析到head标签最上方(目的是方便模板中自定义样式生效)
                        insertAt: 'top'
                    }
                },
                // 解析@import 语法
                'css-loader',
                'stylus-loader'
            ]
        }]
    }
}