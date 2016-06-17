class ParallelcoordsController {

  constructor($scope, datasetsSrv) {
    'ngInject';
    this.name = 'parallelcoords';
    this.$scope = $scope;
    this.datasetsSrv = datasetsSrv;
  }

  requestData() {
    this.datasetsSrv.getAllNumericData(this.$scope.$parent.$parent.datasetId).then(data => {
      this.data = data;
      this.$scope.$emit('data_ready');
    });
  }

}

export default ParallelcoordsController;
