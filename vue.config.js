module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'htmls',
  // webpack-dev-server 相关配置
  devServer: {
    host: 'localhost', // 开发服务器的主机地址
    port: 8200, // 开发服务器的端口号
    hot: true, // 模块热重载
    compress: true, // 一切服务都使用gzip压缩
    open: true, // 打开浏览器
    overlay: { // 错误或警告的遮罩
      warnings: false,
      errors: true
    },
    clientLogLevel: 'warning' // 在开发工具的控制台将显示消息
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '开发环境'
    }
  },
  lintOnSave: true
}
