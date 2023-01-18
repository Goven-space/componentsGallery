const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式
module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),//入口问文件
  resolve: {
    //是webpack的resolve解析配置下的选项，在引入模块时不带文件后缀时，会来该配置数组里面依次添加后缀查找文件
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {//设置路径别名
      '@': path.join(__dirname, '../src'),
      '@page': path.join(__dirname, '../src/page'),
      '@mock': path.join(__dirname, '../src/mock'),
      '@component': path.join(__dirname, '../src/component'),
      '@assets': path.join(__dirname, '../src/assets')
    },
    // modules: [path.join(__dirname, '../node_modules')],
  },

  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },

  cache: {
    type: 'filesystem', // 使用文件缓存,持久化缓存
  },

  module: {
    rules: [
      // {
      //   test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
      //   use: [{
      //     loader: 'thread-loader', //进程启动大概为600ms，只适合大型项目
      //     options: {
      //       workders: 2 //进程数量2个
      //     }
      //   },
      //   {
      //     loader:  'babel-loader',
      //     options: {
      //       // 预设执行顺序由右往左,所以先处理ts,再处理jsx
      //       presets: [
      //         '@babel/preset-react',
      //         '@babel/preset-typescript'
      //       ]
      //     }
      //   }]
      // },
      // {
      //   test: /.(css|less)$/, //匹配 css和less 文件
      //   use: [
      //     'style-loader',
      //     'css-loader',
          // {
          //postcss-loader：处理css时自动加前缀
          // autoprefixer：决定添加哪些浏览器前缀到css中
          //.browserslistrc文件配置哪些浏览器需要加前缀
          //postcss.config.js postcss-loader的配置文件
          //   loader: 'postcss-loader',//兼容css3语法 低版本浏览器 借助插件自动加前缀
          //   options: {
          //     postcssOptions: {
          // plugins: ['autoprefixer']   //此配置可写在postcss.config.js
          //     }
          //   }
          // },
      //     'postcss-loader',
      //     'less-loader'
      //   ]
      // },

      {
        test: /.css$/, //匹配所有的 css 文件
        // include: [path.resolve(__dirname, '../src')],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.less$/, //匹配所有的 less 文件
        // include: [path.resolve(__dirname, '../src')],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },


      {
        // babel-loader: 使用 babel 加载最新js代码并将其转换为 ES5
        // @babel/corer: babel 编译的核心包
        // @babel/preset-env: babel 编译的预设,可以转换目前最新的js标准语法
        // core-js: 使用低版本js语法模拟高版本的库, 也就是垫片
        // include: [path.resolve(__dirname, '../src')],  //只对项目src文件的ts,tsx进行loader解析
        // exclude:不解该选项配置的模块,优先级更高
        test: /.(jsx|ts|tsx)$/,
        use: {
          loader:  'babel-loader'
          // 配置信息可写在babel.config.js文件中
          // options: {
          //   // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
          //   presets: [
          //     [
          //       "@babel/preset-env",
          //       {
          //         // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
          //         // "targets": {
          //         //  "chrome": 35,
          //         //  "ie": 9
          //         // },
          //         "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
          //         "corejs": 3, // 配置使用core-js低版本
          //       }
          //     ],
          //     '@babel/preset-react',
          //     '@babel/preset-typescript'
          //   ]
          // }
        }
      },

      {
        // 处理图片文件
        // webpack5 自带asset-module
        // webpack4 使用file-loader  url-loader
        // images.d.ts 图片声明文件
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/images/[name].[contenthash:8][ext]', // 文件输出目录和命名
        },
      },


      {
        // 处理字体和媒体文件
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/fonts/[name].[contenthash:8][ext]', // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/media/[name].[contenthash:8][ext]', // 文件输出目录和命名
        },
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),

    // 配置环境变量BASE_ENV
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
    })
  ]

   

}