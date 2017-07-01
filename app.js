(function(){
	'use strict';
	angular.module('TaskApp',['ui.router','ui.router.title'])
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
		$stateProvider

    	.state('home', {
	        url: "/",
	        templateUrl: 'app/partials/home/home.html',
            resolve: {
                $title: function() { return 'Home'; }
            }
    	})
    	.state('about', {
	        url: "/about",
	        templateUrl: 'app/partials/home/home.html',
            resolve: {
                $title: function() { return 'About'; }
            }
    	})
        .state('users', {
	        url: "/users",
            controller: 'UsersCtrl',
            controllerAs: 'Users',
            templateUrl: 'app/partials/user/users.html',
            resolve: {
                $title: function() { return 'Users'; },
                usersNeeded: function(userSrv){

                    return userSrv.getUsers();
                }
            }

    	})
    	.state('user', {
	        url: "/:login",
            parent: 'users',
            resolve: {
                $title: function() { return 'User'; },
                
            }
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