'use strict';

var homePageModule =  angular.module('homePage', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/homePage', {
				templateUrl: 'partials/home/home.html'
		}).
			when('/buttonView', {
				templateUrl: 'partials/buttonView/buttonView.html',
				controller: 'buttonViewCtrl'
		}).
			when('/home', {
				templateUrl: 'partials/home/home.html',
				controller: 'logo'
		});
	}])