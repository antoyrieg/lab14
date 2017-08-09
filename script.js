(function() { 
var app = angular.module("catDog", ["ngRoute"]);
	app.config(function($routeProvider) {
		$routeProvider.when("/animal1" , {
			templateUrl: "animal1.html",
			controller: "image1Controller"
		});	
		$routeProvider.when("/animal2" , {
			templateUrl:"animal2.html" ,
			controller: "image2Controller"
		});	
		$routeProvider.otherwise({
			template:"Click one of the links to get an answer to the question!"
		});
	});

})();
