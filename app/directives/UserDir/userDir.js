angular.module('TaskApp').directive('userDir', userDir);
function userDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: 'userDir.html'
	};
}