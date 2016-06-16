import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap_dropdowns_enhancement/dist/css/dropdowns-enhancement.css';
import './app.css';

import AppDirective from './app.directive';
import components from './components/components';
import services from './services/services';

const app = registerAngularModule('app', [components.module.name, services.name])
              .controller('appCtrl', function($scope) {
                'ngInject';
                $scope.components = components.componentsList;
              })
              .directive('app', AppDirective);

export default app;
