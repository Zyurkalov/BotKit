const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    registration: "./src/js/registration.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "eval-source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|ico|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/registration.html",
      chunks: ["registration"],
      template: path.resolve(__dirname, "src", "pages", "registration.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/ui-kit/ui-kit-navigation-page.html",
      chunks: ["main"],
      template: path.resolve(
        __dirname,
        "src",
        "pages",
        "ui-kit",
        "ui-kit-navigation-page.html",
      ),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "./css/[name].css" }),
  ],
};
