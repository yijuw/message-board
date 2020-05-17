const path = require('path');

module.exports = {
  mode: 'development',
    entry: '.public/src/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                    ['@babel/preset-env', 
                    { useBuiltIns: 'usage', corejs: { version : 3 }}]
                ]
              }
            }
          }
        ]
      }
};