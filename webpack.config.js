const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

const entry = {
  main: "./src/index.js",
  registration: "./src/js/registration.js",
  login: "./src/js/login.js",
  reset_password: "./src/js/reset_password.js",
  add_bot: "./src/js/add_bot.js",
  chat: "./src/js/chat.js",
  dashboard: "./src/js/dashboard.js",
  mailing_list: "./src/js/mailing_list.js",
  pp: "./src/js/pp.js",
  ui_kit_buttons: "./src/js/ui-kit/ui_kit_buttons.js",
  ui_kit_fields: "./src/js/ui-kit/ui_kit_fields.js",
  ui_kit_components: "./src/js/ui-kit/ui_kit_components.js",
  ui_kit_icons: "./src/js/ui-kit/ui_kit_icons.js",
  ui_kit_navigation: "./src/js/ui-kit/ui_kit_navigation.js",
  ui_kit_navigation_page: "./src/js/ui-kit/ui_kit_navigation_page.js",
};

module.exports = {
  entry,
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
          "resolve-url-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"],
    }),
    // Dynamically generate HtmlWebpackPlugin instances for each HTML file
    ...glob.sync("./src/pages/**/*.html").map((file) => {
      let filePath = path.parse(file);
      // Get the relative path from src/pages to the file
      let relativePath = path.relative("./src/pages", filePath.dir);
      let fileName = filePath.name;
      let chunkName = Object.keys(entry).find((key) => key === fileName);
      return new HtmlWebpackPlugin({
        template: file,
        // Keep the original subdirectory structure
        filename: `./pages/${relativePath}/${fileName}.html`,
        chunks: chunkName ? [chunkName] : [],
      });
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "./css/[name].css" }),
  ],
};
