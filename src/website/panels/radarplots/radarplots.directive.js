import template from './radarplots.html';
import controller from './radarplots.controller';
import './radarplots.css';
import RadarChart from './radarChart';

class RadarplotsDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {};
    this.controller = controller;
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  link(scope, element) {
    scope.$on('data_ready', () => this.createVisualization(scope, element));
    scope.vm.requestRandomData(3);
  }

  // adapted from http://bl.ocks.org/nbremer/21746a9668ffdf6d8242
  createVisualization(scope, element) {
    let processedData = _.map(scope.vm.data, d => {
      let ret = [];
      _.forOwn(d, (v, k) => ret.push({'axis' : k,
                                      'value' : (v - scope.vm.dataStats[k].min) /
                                                (scope.vm.dataStats[k].max - scope.vm.dataStats[k].min)}));
      return ret;
    });
    var margin = {top: 50, right: 10, bottom: 0, left: 10},
        width = 1200,
        height = 350;

    var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 1.0,
      levels: 5,
      roundStrokes: true
    };

    //Call function to draw the Radar chart
    RadarChart($(element).find(".radar-plots-container")[0], processedData, scope.vm.dataLabels, radarChartOptions);
  }


}

export default RadarplotsDirective;
