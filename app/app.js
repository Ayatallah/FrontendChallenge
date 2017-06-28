(function(){
	'use strict';
	angular.module('TaskApp',['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$routeProvider
        .when("/home", {
          templateUrl: "./partials/home.html"
        })
        .otherwise({
           redirectTo: '/'
        });
	}]);
}());