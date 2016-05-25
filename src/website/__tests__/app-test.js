import app from '../app';

describe('app', function () {

  var scope, controller, compile;

  beforeEach(function () {
    angular.mock.module('app');
  });

  describe('app controller and directive', function () {

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $compile) {
      scope = $rootScope.$new();
      controller = $controller('appCtrl', {
        '$scope': scope
      });
      compile = $compile;
    }));

    it('should have a components list defined with at least one component', function () {
      expect(scope.components).toBeDefined();
      expect(scope.components.length).toBeGreaterThan(0);
    });

    it('should create as many entries in the navbar as the number of registered components', function() {
      var element = compile("<app></app>")(scope);
      scope.$digest();
      expect($(element).find('.component-link').length).toEqual(scope.components.length);
    });

  });

});
