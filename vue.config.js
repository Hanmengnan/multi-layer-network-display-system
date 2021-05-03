const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

//定义cesium源码路径
let cesiumSource = "./node_modules/cesium/Source";
let cesiumWorkers = "../Build/Cesium/Workers";

module.exports = {
  // 解决打包后出现"Failed to load resource: net::ERR_FILE_NOT_FOUND"的错误
  publicPath: "./",
  devServer: {
    port: 8090, //修改服务端口号
    proxy: {
      //配置跨域
      "/api": {
        target: "http://localhost:8070", //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, //允许跨域
        pathRewrite: {
          /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
            实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
          */
          "^/api": ""
        }
      }
    }
  },
  outputDir: "dist", //设置 build 输出目录
  configureWebpack: {
    output: {
      sourcePrefix: " " //让webpack正确处理多行字符串
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        //在resolve中设置cesium别名，
        //这样在引入的时候就可以根据别名找到Cesium的包
        cesium: path.resolve(__dirname, cesiumSource)
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" }
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Assets"), to: "Assets" }
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Widgets"), to: "Widgets" }
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, "ThirdParty/Workers"),
          to: "ThirdParty/Workers"
        }
      ]),
      new webpack.DefinePlugin({
        //定义 Cesium 从哪里加载资源，如果使用默认的''，
        //却变成了绝对路径了，所以这里使用'./',使用相对路径
        CESIUM_BASE_URL: JSON.stringify("./")
      })
    ],
    module: {
      unknownContextCritical: false
    }
  },

  productionSourceMap: false
};
