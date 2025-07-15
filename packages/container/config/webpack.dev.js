const { merge } = require("webpack-merge");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

// for Federation
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// Shortcut for Sharing Libraries
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
    // historyApiFallback: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),

    // for Federation
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
