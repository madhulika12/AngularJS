'use strict';

angular.module('myApp.buttonView', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/buttonView', {
			templateUrl: 'buttonView/buttonView.html'
		});
	}])