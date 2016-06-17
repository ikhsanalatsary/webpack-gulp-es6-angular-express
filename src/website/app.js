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
                $scope.datasets = ['Cars', 'Cameras'];
              })
              .directive('app', AppDirective)
              .config(($stateProvider, $urlRouterProvider) => {
                'ngInject';
                $urlRouterProvider.otherwise('/Cars');
                $stateProvider.state('Cars', {
                                      url: '/Cars',
                                      template: '<workspace data-dataset-id="cars"/>',
                                     })
                              .state('Cameras', {
                                      url: '/Cameras',
                                      template: '<workspace data-dataset-id="cameras"/>',
                                    });
              });

export default app;
