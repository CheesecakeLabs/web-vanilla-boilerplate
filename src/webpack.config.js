const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./javascript/app",
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("dev"),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                config: {
                  path: "./postcss.config.js",
                },
              },
            },
            "postcss-loader",
          ],
        }),
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: false,
                minimize: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?",
        ],
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
      },
    ],
  },
  devServer: {
    contentBase: "../public/",
    publicPath: "/static/",
    hot: true,
    inline: true,
  },
  output: {
    path: path.resolve(__dirname, "../public/static"),
    filename: "bundle.js",
  },
};
