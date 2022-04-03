const path = require('path')

module.exports = {
  productionSourceMap: false,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
}
