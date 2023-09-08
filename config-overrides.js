const webpack = require('webpack');
// eslint-disable-next-line prettier/prettier
const application = require('./package.json');

module.exports = function override(config) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      'self.APP_VERSION': JSON.stringify(application.version),
    })
  );

  return config;
};
