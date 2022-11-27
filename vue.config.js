const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: "localhost",
    port: "8080",
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.output.chunkFilename(`js/[name].[fullhash:8].js`);
  },
  configureWebpack: {
    output: {
      filename: "[name].[hash].js",
    },
  },
});
