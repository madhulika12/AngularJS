angular.module('homePage').controller('buttonViewCtrl',  [function() {
	this.member = {buttonDisplay : false}

	this.navData = [
		{
			name : "Home"
		},

		{
			name : "About",
			subLi : {li1 : "Our Team", 
					  li2: "Our Efforts"
				      }
		},

		{
			name : "Blog"
		},

		{
			name : "Services",
			subLi : {li3 : "Design",
					  li4 : "Web",
					  li5 : "Learn",
					  li6 : "Invent"
					}
		},

		{
			name : "Portfolio"
		},

		{
			name : "Contact"
		},
	]

	this.nav = function() {
		 //returns Object {buttonDisplay: false}
		//console.log(JSON.stringify(this));
		this.member.buttonDisplay = true;
	};

	this.closeNav = function() {
		 //returns Object {buttonDisplay: true}
		//console.log(JSON.stringify(this)); 
		this.member.buttonDisplay = false;
	};
}])