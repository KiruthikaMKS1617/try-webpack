const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // processes tradional js based styles and creates style snippet in head tag
          "css-loader", // processes imports and convert to traditional js
        ],
      },
    ],
  },
};
