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
