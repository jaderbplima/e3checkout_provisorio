const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  distDir: 'build',
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
})