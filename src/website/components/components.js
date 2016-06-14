import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var moduleDescriptionContext = require.context("./", true, /^.*\/description\.js$/);

var moduleNames = _.map(moduleDescriptionContext.keys(), (k, i) => {
  var pos = k.indexOf('/');
  var pos2 = k.lastIndexOf('/');
  return k.substr(pos+1, pos2-pos-1);
});

const components = _.map(requireAll(moduleDescriptionContext), m => m.default);

const componentsModule = registerAngularModule('app.components', [uiRouter, ocLazyLoad])
  .config(($stateProvider, $urlRouterProvider) => {

    'ngInject';

    $urlRouterProvider.otherwise(components[0].url);

    _.each(components, (c, i) =>
      $stateProvider
        .state(c.url, {
          url: '/' + c.url,
          template: c.template,
          resolve:  {
            loadModule: ($q, $ocLazyLoad) => {
              return $q((resolve) => {
                var load = require('bundle?lazy!./'+moduleNames[i]+'/index');
                if (__TEST__) return;
                load(function(module) {
                  resolve($ocLazyLoad.load({name: module.default.name}));
                });
              });
            }
          }
        }
      ));
  });

export default {
  module: componentsModule,
  componentsList : components
};
