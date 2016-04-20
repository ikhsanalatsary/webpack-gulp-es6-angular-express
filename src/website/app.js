import appConfig from 'config';

import './app.css';

import AppDirective from './app.directive';
import components from './components/components';

const app = registerAngularModule('app', [components.module.name])
              .controller('app', function($scope) {
                'ngInject';
                $scope.components = components.componentsList;
              })
              .directive('app', AppDirective);

export default app;
