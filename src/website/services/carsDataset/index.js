class CarsDataset {

  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
  }

  getAllCarsData() {
    return this.$http.get('datasets/cars').then(response => {
      return response.data;
    });
  }

  getRandomCarsNumericData(nbCars) {
    return this.$http.get('datasets/cars/stats').then(response => {
      let totalNbCars = response.data.count;
      let requests = [];
      for (let i = 0 ; i < nbCars ; ++i) {
        requests.push(this.$http.get('datasets/cars/' + ((Math.random() * totalNbCars)|0)));
      }
      let numericProps = _.keys(_.pickBy(response.data.propertiesTypes, (v, k) => v === 'number'));
      return this.$q.all(requests).then((values) => {
        return {dataStats: response.data.numericalPropertiesStats,
                data: _.map(values, v => _.pick(v.data, numericProps))};
      });
    });
  }

}

export default  {
  serviceName: 'carsDatasetSrv',
  serviceClass: CarsDataset
};
