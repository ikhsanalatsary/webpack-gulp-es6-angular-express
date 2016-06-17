import WorkspaceController from './workspace.controller';
import WorkspaceDirective from './workspace.directive';

var workspaceModule = registerAngularModule('app.workspace', ['app.panels'])
  .controller('workspaceController', WorkspaceController)
  .directive('workspace', WorkspaceDirective);


export default workspaceModule;
