const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: {
      optimization: {
          splitChunks: false,
      },
  },
  devServer: {
    proxy: "https://fakestoreapi.com"
  }
})
