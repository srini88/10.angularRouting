(function(){

	var app = angular.module('app',['ngRoute']);
	app.config(['$logProvider','$routeProvider', function($logProvider, $routeProvider){
		$logProvider.debugEnabled(true);
		$routeProvider
			.when('/',{
				controller:'HomeController',
				controllerAs:'home',
				template:'<h1>Hello routing</h1>'
				//templateUrl:'templates/home.html'
			});
	}])
	app.controller('HomeController', ['$scope', function($scope){
		
		$scope.message = "Hello from homecontroler";;

	}])


})();