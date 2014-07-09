define(
  [
    'angular',
    './controllers/controllers',
    './directives/directives',
    './filters/filters',
    './services/services',
  ],
  function(angular) {
    return angular.module('package', [
      'controllers',
      'directives',
      'filters',
      'services',
    ]);
  }
);