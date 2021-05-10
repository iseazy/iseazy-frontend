const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {

  let modeEnv = "development"
  
  if (env.CONFIG_ENV === "preproduction") {
    modeEnv = "preproduction";
  } else if (env.CONFIG_ENV === "production") {
    modeEnv = "production";
  }

  function getPlugins(modeEnv) {
    var plugins = [];
    
    /* On a production building, get UglifyJsPlugin to compress js files 
    and replace process.env.NODE_ENV const to 'production' 
    in order to build React in production mode */

    if( modeEnv === 'production' ) {

      console.log("Enabled production mode");

      plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
      }));
    }

    return plugins;
  }

  return {
    entry: {
      "me-memory.js": "./src/index.js"
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]'
    },
    watch: env.CONFIG_ENV !== 'production' && env.CONFIG_ENV !== 'preproduction',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/react"],
            "plugins": [
              "transform-es2015-template-literals",
              "@babel/plugin-proposal-export-default-from",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000
              },
            },
          ],
        },
      ]
    },
    resolve: {
      alias: {
        actionTypes: path.join(__dirname, 'src/redux/actionTypes.js'),
        actions: path.join(__dirname, 'src/redux/actions.js'),
        styles: path.join(__dirname, 'src/css/index.css')
      }
    },
    plugins: getPlugins(modeEnv)
  }
};