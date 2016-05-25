var DeepMerge = require('deep-merge');

// Utility functions to merge an object into another
var deepmerge = DeepMerge(function(target, source, key) {
  if (target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

var defaultConfig = require('./webpack.config.common');

var config = function(overrides) {
  return deepmerge(defaultConfig, overrides || {});
};

module.exports = {
  // Webpack configuration for the frontend Web application
  frontendConfig: config(require('./webpack.config.frontend')),

  // Webpack configuration for the backend server application
  backendConfig: config(require('./webpack.config.backend'))
};
