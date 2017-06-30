angular.module('TaskApp').directive('usersDir', usersDir);
function usersDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: 'usersDir.html'
	};
}