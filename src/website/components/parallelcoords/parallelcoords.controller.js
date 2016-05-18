class ParallelcoordsController {
  /*@ngInject*/
  constructor($scope, carsDatasetSrv) {
    this.name = 'parallelcoords';
    this.$scope = $scope;
    this.carsDatasetSrv = carsDatasetSrv;
  }

  requestData() {
    this.carsDatasetSrv.getAllCarsData().then(data => {
      this.data = data;
      this.$scope.$emit('data_ready');
    });
  }

}

export default ParallelcoordsController;
