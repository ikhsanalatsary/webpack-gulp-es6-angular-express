import template from './app.html';

class AppDirective {

  constructor($timeout) {
    'ngInject';
    this.$timeout = $timeout;
    this.template = template;
    this.restrict = 'E';
  }

  link(scope, element) {
    // $timeout does not get injected when running unit tests (don't really know why ...)
    if (!this.$timeout) return;
    this.$timeout(() => {
      $($(".nav li a")[0]).parent().addClass("active");
      $(".nav li a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
      });
    }, false);
  }
}

export default AppDirective;
