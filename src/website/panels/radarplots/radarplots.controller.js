class RadarplotsController {

  constructor($scope, datasetsSrv) {
    'ngInject';
    this.name = 'radarplots';
    this.$scope = $scope;
    this.datasetsSrv = datasetsSrv;
  }

  requestRandomData(nbData=3) {
    this.datasetsSrv.getRandomNumericData(this.$scope.$parent.$parent.datasetId, nbData).then(carsData => {
      this.dataStats = carsData.dataStats;
      this.data = carsData.data;
      this.dataLabels = carsData.dataLabels;
      this.$scope.$emit('data_ready');
    });
  }
}

export default RadarplotsController;
