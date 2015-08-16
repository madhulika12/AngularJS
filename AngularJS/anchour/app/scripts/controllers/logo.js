angular.module('homePage').controller('logo',  ['$location', function($location) {
	this.goToUrl = function (url) {
	  $location.path(url);
	};
}])