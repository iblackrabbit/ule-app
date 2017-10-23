//引入webpack
const webpack = require("webpack");
//引入html生成插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//引入文本抽离插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let outputdir = "";
if (process.env.NODE_ENV === "development") {
    outputdir = "/development";
} else {
    outputdir = "/production";
}
let publicModule = {
    //入口
    entry: {
        "scripts/app": "./src/scripts/app.js"
    },
    //出口
    output: {
        filename: '[name].js',
        path: __dirname + outputdir
    },
    //devtool 输出独立文件
    devtool: 'source-map',
    //配置模块
    module: {
        rules: [
            //解析es6+
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除node_module下的js被解析
                use: 'babel-loader' //解析es6+
            },
            //加载css
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },

          // 加载Vue 单文件组件
            {
                test: /\.vue$/,
                exclude: /node_modules/, // 排除node_modules下.js的解析
                use: [{
                loader: 'vue-loader'
                }]
            },


            //加载scss
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            //加载图片
            {
                test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10,
                    name: "media/images/[name].[ext]"
                }
            },
            // 加载媒体文件
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/mp4/[name].[ext]'
                }
            },

            // 加载iconfont
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10,
                    name: 'media/iconfont/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        //生成抽离文本文件插件的实例
        new ExtractTextPlugin({
            filename: function (getPath) {
                return getPath("[name].css").replace("scripts", "styles");
            },
            allChunks: true
        }),
        // 生成编译HTML(index.html)的插件的实例
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        //代码压缩
        // new webpack.optimize.UglifyJsPlugin()
    ]
};
var devserver = { //配置webserver
    devServer: {
        host: 'localhost',
        port: 4000,
        contentBase: __dirname + outputdir,
        noInfo: true,
        proxy: {
            '/api': {
                target: 'http://static-content.ulecdn.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/vip': {
                target: 'http://localhost:9000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/vip': ''
                }
            }
        }
    }
}
if (process.env.NODE_ENV === 'development') {
    module.exports = Object.assign({}, publicModule, devserver);
} else {
    module.exports = publicModule;
}