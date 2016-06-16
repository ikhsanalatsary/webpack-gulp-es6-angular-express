import PanelDirective from './panel.directive';

var panelModule = registerAngularModule('app.directives.panel', [])
  .directive('panel', PanelDirective);

export default panelModule;
