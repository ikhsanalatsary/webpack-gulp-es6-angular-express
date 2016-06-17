import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap_dropdowns_enhancement/dist/css/dropdowns-enhancement.css';
import 'common/googleFonts';
import './app.css';

import AppDirective from './app.directive';
import directives from './directives/directives';
import services from './services/services';
import panels from './panels/panels';

import uiRouter from 'angular-ui-router';

const app = registerAngularModule('app', [services.name, directives.module.name, panels.module.name, uiRouter])
              .controller('appCtrl', function($scope) {
                'ngInject';
                $scope.datasets = [
                  {
                    name: 'Cars',
                    url: 'cars',
                    icon: 'car'
                  },
                  {
                    name: 'Cameras',
                    url: 'cameras',
                    icon: 'camera'
                  }
                ];
              })
              .directive('app', AppDirective)
              .config(($stateProvider, $urlRouterProvider) => {
                'ngInject';
                $urlRouterProvider.otherwise('/cars');
                $stateProvider.state('cars', {
                                      url: '/cars',
                                      template: '<workspace data-dataset-id="cars"/>',
                                     })
                              .state('cameras', {
                                      url: '/cameras',
                                      template: '<workspace data-dataset-id="cameras"/>',
                                    });
              });

export default app;
