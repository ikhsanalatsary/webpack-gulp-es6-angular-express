import RadarplotsDirective from './radarplots.directive';

const radarplotsModule = registerAngularModule('radarplots', [])
  .directive('radarplots', RadarplotsDirective);

export default radarplotsModule;
