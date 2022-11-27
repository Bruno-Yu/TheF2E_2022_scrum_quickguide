const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/TheF2E_2022_scrum_quickguide/"
      : "/",
  configureWebpack: {
    devtool: "source-map",
  },
});
