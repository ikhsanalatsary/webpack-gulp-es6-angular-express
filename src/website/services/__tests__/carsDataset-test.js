import services from '../services';
import {carsSamples, mockCarsDatasetApi} from 'tests_utils/mock_rest_api';

describe('cars dataset services', function () {

  var httpBackend, carsDatasetSrv;

  beforeEach(function () {
    angular.mock.module('app.services');
  });

  beforeEach(angular.mock.inject(function ($httpBackend, _carsDatasetSrv_) {
    httpBackend = $httpBackend;
    carsDatasetSrv = _carsDatasetSrv_;
    mockCarsDatasetApi(httpBackend);
  }));

  it('should fetch the whole cars dataset', function (done) {
    carsDatasetSrv.getAllCarsData().then(function(cars) {
      expect(cars).toEqual(carsSamples);
      done();
    });
    httpBackend.flush();
  });

  it('should fetch two random cars data', function (done) {
    carsDatasetSrv.getRandomCarsNumericData(2).then(function(carsData) {
      expect(carsData.data.length).toEqual(2);
      done();
    });
    httpBackend.flush();
  });

});
