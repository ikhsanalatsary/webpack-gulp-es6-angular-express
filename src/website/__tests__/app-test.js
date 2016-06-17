import app from '../app';
import {mockCarsDatasetApi} from 'tests_utils/mock_rest_api';

describe('app', function () {

  var scope, controller, compile, httpBackend, timeout;

  beforeEach(function () {
    angular.mock.module('app');
  });

  describe('app controller and directive', function () {

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $compile, $httpBackend, $timeout) {
      scope = $rootScope.$new();
      timeout = $timeout;
      controller = $controller('appCtrl', {
        '$scope': scope
      });
      compile = $compile;
      httpBackend = $httpBackend;
      mockCarsDatasetApi(httpBackend);
    }));

    it('should have a datasets list defined with at least one dataset', function () {
      expect(scope.datasets).toBeDefined();
      expect(scope.datasets.length).toBeGreaterThan(0);
    });

    it('should create as many entries in the navbar as the number of registered datasets', function() {
      var element = compile("<app></app>")(scope);
      scope.$digest();
      timeout.flush();
      expect($(element).find('.dataset-link').length).toEqual(scope.datasets.length);
    });

  });

});
