import ParallelCoordsDirective from './parallelcoords.directive';
import registerAngularModule from 'registerAngularModule';

const parallelcoordsModule = registerAngularModule('parallelcoords', [])
  .directive('parallelcoords', ParallelCoordsDirective);

export default parallelcoordsModule;
