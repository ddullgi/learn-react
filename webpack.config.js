const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
  // plugin을 클래스로 만들기 때문에 new를 써서 선언해준다.
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
    // 빌드 명령어 실행 시 이전에 빌드한 결과물들을 제거해 준다.
    new CleanWebpackPlugin(),
    // 원래 빌드 결과인 js 파일에 css가 포함되어 있는데 이를 분리해준다.
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  //? 최적화
  optimization: {
    // 코드 압축
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
};
