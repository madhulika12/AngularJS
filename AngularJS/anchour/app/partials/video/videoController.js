angular.module('homePage').controller('watchVideo',  [function() {
	this.property = {displayVideo: false} //directive

	this.videoAvailable = function () {
	  this.property.displayVideo = true;
	};

	this.closeVideo = function() {
		 this.property.displayVideo = false;
           jQuery("#playVideo").get(0).pause();
	};

	this.playIt = function() {
  		if (jQuery("#playVideo").get(0).paused) {
  			jQuery("#playVideo").get(0).play();
  		}
  		else {
  			jQuery("#playVideo").get(0).pause();
  		}
	}
}])