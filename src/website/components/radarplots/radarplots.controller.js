class RadarplotsController {
  /*@ngInject*/
  constructor($scope, carsDatasetSrv) {
    this.name = 'radarplots';
    this.$scope = $scope;
    this.carsDatasetSrv = carsDatasetSrv;
  }

  requestRandomData(nbData=3) {
    this.carsDatasetSrv.getRandomCarsNumericData(nbData).then(carsData => {
      this.dataStats = carsData.dataStats;
      this.data = carsData.data;
      this.$scope.$emit('data_ready');
    });
  }
}

export default RadarplotsController;
