"devDependencies": {
    "@babel/core": "^7.18.13", //babel 编译的核心包
    "@babel/plugin-proposal-decorators": "^7.19.0",  //识别装饰器
    "@babel/preset-env": "^7.18.10",  //babel 编译的预设,可以转换目前最新的js标准语法
    "@babel/preset-react": "^7.18.6", //识别jsx语法
    "@babel/preset-typescript": "^7.18.6", //ts语法转换为 js 语法
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.7", //不需要刷新浏览器的前提下模块热更新  依赖于react-refresh
    "@types/react": "^18.0.18",  //react类型依赖
    "@types/react-dom": "^18.0.6", //react类型依赖
    "autoprefixer": "^10.4.8", //决定添加哪些浏览器前缀到css中
    "babel-loader": "^8.2.5", //使用 babel 加载最新js代码并将其转换为 ES5
    "compression-webpack-plugin": "^10.0.0", //打包时生成gzip文件
    "copy-webpack-plugin": "^11.0.0",
    "core-js": "^3.25.0",   //使用低版本js语法模拟高版本的库,也就是垫片
    "cross-env": "^7.0.3",  //复制public文件夹
    "css-loader": "^6.7.1", //解析css,
    "css-minimizer-webpack-plugin": "^4.1.0", //压缩css
    "eslint-config-prettier": "^8.5.0",
    "glob-all": "^3.3.0",  //选择要检测哪些文件里面的类名和id还有标签名称
    "html-webpack-plugin": "^5.5.0",  //以public下的index.html为模板生成一个index.html到dist文件下
    "less": "^4.1.3",
    "less-loader": "^11.0.0",
    "mini-css-extract-plugin": "^2.6.1", //打包时把css单独抽离出来
    "postcss-loader": "^7.0.1",  //知道要加哪些浏览器的前缀,在根目录创建 .browserslistrc文件
    "purgecss-webpack-plugin": "^4.1.3", //tree-shaking清理未使用css
    "react-refresh": "^0.14.0",  //react模块热更新
    "speed-measure-webpack-plugin": "^1.5.0",  //构建耗时分析
    "style-loader": "^3.3.1", //把css插入到头部style标签中
    "terser-webpack-plugin": "^5.3.6", //压缩js文件
    "thread-loader": "^3.0.4", //多进程解析js
    "webpack": "^5.74.0",
    "webpack-bundle-analyzer": "^4.6.1",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.10.1",
    "webpack-merge": "^5.8.0"