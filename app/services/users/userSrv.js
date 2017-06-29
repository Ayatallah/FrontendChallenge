angular.module('TaskApp').factory('userSrv',userSrv);
function userSrv() {
    var userSrv = {};
    userSrv.getUsers = function(){
		var users = ['Aya','Ahmed'];
		return users;
	};
	return userSrv;

};
