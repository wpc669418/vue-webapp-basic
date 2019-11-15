const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        // sass loder 7.x 则为data
        prependData: `@import "@/assets/styles/public.scss";`
      }
    }
  },
  publicPath: '',
  outputDir: 'your-project',
  configureWebpack: config => {
    const commonConfig = {
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
    if (process.env.NODE_ENV === 'production') {
      return {
        ...commonConfig
      }
    } else {
      return {
        ...commonConfig
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 8072,
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://192.168.137.54:8199/sso/', // 目标接口地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
