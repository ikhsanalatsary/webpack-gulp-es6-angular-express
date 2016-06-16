import panelTemplate from './panel.template.html';

class PanelDirective {
  constructor($compile, panelsManager) {
    'ngInject';
    this.$compile = $compile;
    this.panelsManager = panelsManager;
    this.restrict = 'E';
    this.template = panelTemplate;
    this.scope = {
      name: '@'
    };
  }

  link(scope, element) {
    if (__TEST__) return;
    var panel = this.panelsManager.getPanel(scope.name);
    panel.load().then(() => {
      element.addClass('ng-cloak');
      scope.panelName = panel.name;
      $(element).find('.box-body').html(panel.template);
      this.$compile(element.contents())(scope);
      element.removeClass('ng-cloak');
    });
  }

}

export default PanelDirective;
