const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

module.exports = {
  // 关闭ESlint
  lintOnSave: false,
  devServer: {
    port: 3001,     //自定义启动端口号
    open: false,    //是否自动打开浏览器
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            minPixelValue: 1
          })
        ],
      }
    }
  },
}
