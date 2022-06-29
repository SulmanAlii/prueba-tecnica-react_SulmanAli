const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // query: {
        //   presets: ["es2015"],
        // },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // {
      //   test: /\.scss$/,
      //   include: [path.resolve(__dirname, "styles")],
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader" },
      //     { loader: "sass-loader" },
      //   ],
      // },
    ],
  },

  // output: {
  //   publicPath: "/",
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
