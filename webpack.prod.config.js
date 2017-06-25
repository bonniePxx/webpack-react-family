var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin"); //生成html
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CleanWebpackPlugin = require('clean-webpack-plugin');
//定义地址
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "src");
var APP_FILE = path.resolve(APP_PATH, "app"); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, "./build"); //发布文件所存放的目录,注意.

module.exports = {
    entry: {
        app: ['webpack-dev-server/client?http://localhost:8088',
            'webpack/hot/only-dev-server', APP_FILE
        ],
        vendor: [
            'babel-polyfill',
            "react",
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk',
            'immutable'
        ]
    },
    output: {
        // publicPath: "/build/static", //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //发布文件地址
        filename: "js/[name].js", //编译后的文件名字
        chunkFilename: "[name].[chunkhash:5].min.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"] //后缀名自动补全
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /^node_modules$/,
                loaders: ["react-hot-loader", "babel-loader"],
                include: [APP_PATH]
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                 loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                include: [APP_PATH]
            },
            {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!sass-loader'
                }),
             
                include: [APP_PATH]
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: "file-loader?name=[name].[ext]",
                include: [APP_PATH]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /^node_modules$/,
                loader: "url-loader?limit=8192&name=images/[name].[hash:8].[ext]",
                //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                include: [APP_PATH]
            },
            {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: ["react-hot-loader", "jsx-loader", "babel-loader"],
                include: [APP_PATH]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: ROOT_PATH,
            verbose: true,
            dry: false,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            disable: false,
            allChunks: true
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            hash: true
        }),
        //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments （移除所有注释）
            },
            compress: { // 压缩
                warnings: false
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};