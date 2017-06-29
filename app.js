(function(){
	'use strict';
	angular.module('TaskApp',['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
		$stateProvider

    	.state('home', {
	        url: "/",
	        templateUrl: 'app/partials/home/home.html'
    	})
    	.state('about', {
	        url: "/about",
	        templateUrl: 'app/partials/home/home.html'
    	})
        .state('users', {
	        url: "/users",
	        templateUrl: 'app/partials/user/users.html'
    	})
    	.state('user', {
	        url: "/users/:login",
	        templateUrl: 'app/partials/user/users.html'
    	});
    	$urlRouterProvider.when('/home', '/');
    	$urlRouterProvider.when('/about/', '/');
    	$urlRouterProvider.otherwise('/');

    // The following couple of lines are used to remove # for more pretty URLs
   // Will need node/express rewrites to work with refresh
 	/*    
	$locationProvider.html5Mode({
     	enabled: true,
     	requireBase: false
 	});
 	*/
	}]);
}());