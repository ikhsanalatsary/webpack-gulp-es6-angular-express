import RadarplotsDirective from './radarplots.directive';
import registerAngularModule from 'registerAngularModule';

const radarplotsModule = registerAngularModule('radarplots', [])
  .directive('radarplots', RadarplotsDirective);

export default radarplotsModule;
