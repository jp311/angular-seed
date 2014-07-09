define(
  [
    'angular',
    'require',
    'angularRoute',
    './fooCtrl',
  ],
  function(angular, require) {
    return angular.module('controllers', ['ngRoute'])
      .config(function($routeProvider) {
        $routeProvider.when('/foo', {
          controller: 'fooCtrl',
          templateUrl: require.toUrl('../views/foo.html'),
        });
      })
      .controller('fooCtrl', ['$scope', require('./fooCtrl')]);
  }
);