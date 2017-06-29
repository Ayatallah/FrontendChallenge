(function(){
	'use strict';
	angular.module('TaskApp',['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
		$stateProvider
    	.state('home', {
        url: "/home",
        templateUrl: 'partials/home.html'
    });
    
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