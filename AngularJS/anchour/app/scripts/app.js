'use strict';

var anchourAppModule = angular.module('anchour', ['ngAnimate', 'application', 'ngRoute', 'homePage'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/homePage'
      });
}]);
