angular.module('TaskApp')
.controller('UsersCtrl',['$scope', '$state','userSrv','usersNeeded',UsersCtrl]);

function UsersCtrl($scope,$state, userSrv,usersNeeded){
	var vm = this;

	// Initial Values
	//if($state.includes('users')){
		vm.users = usersNeeded;
		userSrv.getUser(vm.users[0].login).then(function (user) {
				vm.user=user;
		});
	//}
	vm.getuser = function(){
		// console.log('hey get user');
		// console.log($state.params.login);
		// console.log($state.current.name);
		if($state.params.login !== undefined){
			//console.log($state.params.login);
			userSrv.getUser($state.params.login).then(function (user) {
				//console.log(user);
				//console.log($state.params.login);
				vm.user=user;
			});
		}

	}

	vm.loadmore = function(){
		userSrv.getUsers().then(function (users) {
			//console.log(vm.users.length);
			vm.users= (vm.users).concat(users);
			//console.log(vm.users.length);
		});
	}
	//console.log($state.params);
	//console.log(vm.user);
	//console.log("hey");
	//console.log(usersNeeded[0].id)
}