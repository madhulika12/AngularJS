'use strict';

/**
 * @ngdoc function
 * @name nuclearMedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nuclearMedApp
 */
angular.module('nuclearMedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
