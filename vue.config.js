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
}
