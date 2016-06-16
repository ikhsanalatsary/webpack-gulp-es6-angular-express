import ParallelCoordsDirective from './parallelcoords.directive';

const parallelcoordsModule = registerAngularModule('parallelcoords', [])
  .directive('parallelcoords', ParallelCoordsDirective);

export default parallelcoordsModule;
