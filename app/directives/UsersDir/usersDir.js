angular.module('TaskApp').directive('usersDir', usersDir);
function usersDir(){
	return{
		restrict: 'EA',
		scope: {
			userslist: "=",
			getuser: "&"
		},
		templateUrl: '/app/directives/UsersDir/usersDir.html'
	};
}