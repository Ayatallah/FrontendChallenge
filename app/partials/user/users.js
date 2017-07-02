angular.module('TaskApp')
.controller('UsersCtrl',['$rootScope','$scope', '$state','userSrv','usersNeeded',UsersCtrl]);

function UsersCtrl($rootScope,$scope,$state, userSrv,usersNeeded){
	var vm = this;
	vm.users = usersNeeded;
	userSrv.getUser(vm.users[0].login).then(function (user) {
			vm.user=user;
	});
	
	vm.getuser = function(){ 
		//console.log($state.params.login);
		userSrv.getUser($state.params.login).then(function (user) {
			vm.user=user;
		});
	}
	$rootScope.$on('$stateChangeSuccess', vm.getuser);
	vm.loadmore = function(){
		userSrv.getUsers().then(function (users) {
			vm.users= (vm.users).concat(users);
		});
	}
}