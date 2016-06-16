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

const app = registerAngularModule('app', [services.name, directives.module.name, panels.module.name])
              .controller('appCtrl', function($scope) {
                'ngInject';
                $scope.components = panels.panelsList;
              })
              .directive('app', AppDirective);

export default app;
