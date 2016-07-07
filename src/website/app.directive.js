import template from './app.html';

class AppDirective {

  constructor($timeout) {
    'ngInject';
    this.$timeout = $timeout;
    this.template = template;
    this.restrict = 'E';
  }

}

export default AppDirective;
