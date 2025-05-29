const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// const PugPlugin = require("pug-plugin");

// Function to auto-reload page even after webpack error compilation

// class RetryAfterErrorPlugin {
//   apply(compiler) {
//     let timeoutId;
//     compiler.hooks.done.tap("RetryAfterPlugin", (stats) => {
//       if (stats.hasErrors()) {
//         if (timeoutId) {
//           clearTimeout(timeoutId);
//         }
//         timeoutId = setTimeout(() => {
//           compiler.watching.invalidate();
//         }, 4000);
//       }
//     });
//   }
// }

module.exports = {
  watch: true, // Force watch mode to detect all file changes

  // Multiple entry points for mount points, CSS sucked by JS
  entry: {
    index: "./src/js/index.js",
    projects: "./src/js/projects.js",
    "web-snippets": "./src/js/web-snippets.js",
    "storage-tools": "./src/js/storage-tools.js",
    "batch-tools": "./src/js/batch-tools.js",
    settings: "./src/js/settings.js",
    about: "./src/js/about.js",
    "no-mobile": "./src/js/no-mobile.js",
    output1: "./src/js/output1.js",
    output2: "./src/js/output2.js",
    testbed1: "./src/js/testbed1.js",
    testbed2: "./src/js/testbed2.js",
    // output1, output2, testbed1, testbed2 pages for testing
  },

  // Output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    // publicPath: "/",
    publicPath: "./",
    clean: true,
  },
  module: {
    rules: [
      // JavaScript processing with Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // SCSS compilation and extraction
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../", // Points to dist root from css folder
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      // Image handling (JPG, WebP, SVG, etc.)
      // !File-loader is already depricated, using Asset/Resource method
      {
        test: /\.(jpg|jpeg|png|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "media/img/[name][ext]",
        },
      },
      // Audio support
      {
        test: /\.(mp3)$/,
        type: "asset/resource",
        generator: {
          filename: "media/aud/[name][contenthash:8][ext]",
        },
      },
      // Font support
      {
        test: /\.(woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][contenthash:8].[ext]",
        },
      },
      // Document handling (TXT, PDF)
      {
        test: /\.(txt|pdf)$/,
        type: "asset/resource",
        generator: {
          filename: "media/docs/[name][contenthash:8].[ext]",
        },
      },
      // Video handling (MP4)
      {
        test: /\.mp4$/i,
        type: "asset/resource",
        generator: {
          filename: "media/videos/[name][hash:8].[ext]",
        },
      },
      // PUG processing
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              esModule: false, // Enables CommonJS-style `require()` in PUG
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Custom Webpack auto reloader
    // new RetryAfterErrorPlugin(),

    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    // Generate render points from PUG
    // ...[
    //   "index",
    //   "projects",
    //   "web-snippets",
    //   "storage-tools",
    //   "batch-tools",
    //   "settings",
    //   "about",
    //   "no-mobile",
    //   "output1",
    //   "output2",
    //   "testbed1",
    //   "testbed2",
    // ].map(
    //   (page) =>
    //     new HtmlWebpackPlugin({
    //       template: `./src/${page}.pug`,
    //       filename: `${page}.html`,
    //       chunks: [page],
    //       inject: true,
    //     })
    // ),

    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "index.html",
      chunks: ["index"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/projects.pug",
      filename: "projects.html",
      chunks: ["projects"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/web-snippets.pug",
      filename: "web-snippets.html",
      chunks: ["web-snippets"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/storage-tools.pug",
      filename: "storage-tools.html",
      chunks: ["storage-tools"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/batch-tools.pug",
      filename: "batch-tools.html",
      chunks: ["batch-tools"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/settings.pug",
      filename: "settings.html",
      chunks: ["settings"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.pug",
      filename: "about.html",
      chunks: ["about"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/no-mobile.pug",
      filename: "no-mobile.html",
      chunks: ["no-mobile"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/output1.pug",
      filename: "output1.html",
      chunks: ["output1"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/output2.pug",
      filename: "output2.html",
      chunks: ["output2"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/testbed1.pug",
      filename: "testbed1.html",
      chunks: ["testbed1"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/testbed2.pug",
      filename: "testbed2.html",
      chunks: ["testbed2"],
      inject: true,
    }),
    // Copy assets to dist folder regardless of their usage or not

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/media/aud",
          to: "media/aud",
          noErrorOnMissing: true,
        },
        // {
        //   from: "src/media/img",
        //   to: "media/img",
        //   noErrorOnMissing: true,
        // },
        {
          from: "src/media/docs",
          to: "media/docs",
          noErrorOnMissing: true,
        },
        {
          from: "src/fonts",
          to: "fonts",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  // new CopyWebpackPlugin({
  //   patterns: [
  //     { from: "src/media/aud", to: "media/aud" },
  //     // turn on if you like to work with video files
  //     // { from: "src/media/vid", to: "media/vid" },
  //     { from: "src/media/img", to: "media/img" },
  //     { from: "src/media/docs", to: "media/docs" },
  //   ],
  // }),

  // Makes sure that all changes are monitored
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
    aggregateTimeout: 400,
    poll: 1000,
  },

  // Development server configuration
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/index.html" }],
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};
