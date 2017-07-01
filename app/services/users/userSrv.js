angular.module('TaskApp').factory('userSrv',['$http', userSrv]);

function userSrv($http) {
    var userSrv = {};
    userSrv.getUsers = function(){
    	
    	return $http.get('https://api.github.com/users').then(function(result){
    		if(result.status == 200){
    			return result.data;
    		}
    	});
    	
	};

	userSrv.getUser = function(login){
    	
    	return $http.get('https://api.github.com/users/'+login).then(function(result){
    		if(result.status == 200){
    			return result.data;
    		}
    	});
    	
	};
	return userSrv;

};
