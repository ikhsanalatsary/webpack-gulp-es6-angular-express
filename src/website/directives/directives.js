function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var reqContext = require.context("./", true, /^.*\/index\.js$/);

var directives = requireAll(reqContext);

var directivesName = _.map(directives, (c) => c.default.name);

let directivesModule = registerAngularModule('app.directives', directivesName);

export default {
  module: directivesModule,
  directivesList : directives
};
