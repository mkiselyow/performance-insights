const { defineConfig } = require('@vue/cli-service')
const REPO_NAME = require('./package').name

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/'
})
