const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  stats: "errors-only",
  devServer: {
    open: true,
    port: 8080,
    proxy: {},
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|jpe?g|png|webp|svg)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    // output 경로에 html 파일을 생성해준다.
    new HtmlWebpackPlugin({
      // 템플릿 경로를 설정한다.
      template: "./public/index.html",
      minify: {
        // 공백 제거
        collapseWhitespace: true,
        // 주석 제거
        removeComments: true,
      },
    }),
  ],
};
