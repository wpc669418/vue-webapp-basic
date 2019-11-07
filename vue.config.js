const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/public.scss";`
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
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
    }
  }
}
