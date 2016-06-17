import template from './app.html';

class AppDirective {
  constructor($timeout) {
    'ngInject';
    this.$timeout = $timeout;
    this.template = template;
    this.restrict = 'E';
  }

  link(scope, element) {
    this.$timeout(() => {
      $(".nav li a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
      });
    }, false);
  }
}

export default AppDirective;
