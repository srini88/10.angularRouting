(function(){

	var app = angular.module('app',['ngRoute']);
	app.config(['$logProvider','$routeProvider', function($logProvider, $routeProvider){
		$logProvider.debugEnabled(true);
		$routeProvider
			.when('/',{
				controller:'HomeController',
				controllerAs:'home',
				templateUrl:'templates/home.html'
			}).when('/schools',{
				controller:'AllSchoolsController',
				controllerAs:'schools',
				templateUrl:'templates/allSchools.html'
			}).when('/classrooms',{
				controller:'AllClassroomsController',
				controllerAs:'classrooms',
				templateUrl:'templates/allClassrooms.html',
				redirectTo:'/'
			}).when('/activities',{
				controller:'AllActivitiesController',
				controllerAs:'activities',
				templateUrl:'templates/allActivities.html'
			});
	}])
	app.controller('HomeController', ['$scope', function($scope){
		
		$scope.message = "Hello from homecontroler";;

	}])


})();