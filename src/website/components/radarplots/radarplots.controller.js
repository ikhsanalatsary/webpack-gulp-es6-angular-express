class RadarplotsController {
  
  constructor($scope, carsDatasetSrv) {
    'ngInject';
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
