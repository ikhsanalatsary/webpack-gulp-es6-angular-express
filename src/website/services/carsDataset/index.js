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
      let fetchedIds = [];
      for (let i = 0 ; i < nbCars ; ++i) {
        let id = ((Math.random() * totalNbCars)|0);
        if (!_.includes(fetchedIds, id)) {
          requests.push(this.$http.get('datasets/cars/' + id));
          fetchedIds.push(id);
        } else {
          --i;
        }
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
