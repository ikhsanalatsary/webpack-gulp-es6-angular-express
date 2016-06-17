
class WorkspaceController {

  constructor($scope, panelsManager) {
    'ngInject';
    $scope.availablePanelsNames = [];
    $scope.panelNameToId = {};
    _.each(panelsManager.getPanelsList(), panelId => {
      var panel = panelsManager.getPanel(panelId);
      $scope.availablePanelsNames.push(panel.name);
      var panelNameWoSpaces = panel.name.replace(/ /g, "");
      $scope.panelNameToId[panelNameWoSpaces] = panelId;
    });

  }

}

export default WorkspaceController;
