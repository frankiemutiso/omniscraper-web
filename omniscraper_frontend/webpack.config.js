const path = require("path");
var webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function (env, argv) {
  const isProd = argv.mode === "production";
  const isDev = !isProd;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    devtool: isDev && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./static/omniscraper_frontend/bundles"),
      filename: "[name].[contenthash].js",
      chunkFilename: "[id]-[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProd ? "production" : "development",
            },
          },
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.module.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new BundleTracker({ filename: "./webpack-stats.json" }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash:8].css",
          chunkFilename: "[name].[contenthash:8].chunk.css",
        }),
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      isProd ? new BundleAnalyzerPlugin() : "",
    ].filter(Boolean),
    optimization: {
      moduleIds: "deterministic",
      concatenateModules: true,
      minimize: isProd,
      minimizer: [
        new TerserWebpackPlugin({
          parallel: 4,
          terserOptions: {
            compress: {
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            warnings: false,
          },
        }),
        new CssMinimizerPlugin({
          parallel: 4,
        }),
      ],
      usedExports: true,
      splitChunks: {
        chunks: "all",
        // minSize: 0,
        minSize: 1000 * 800,
        maxInitialRequests: 25,
        maxAsyncRequests: 25,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      runtimeChunk: "single",
    },
  };
};
