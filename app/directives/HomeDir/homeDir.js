angular.module('TaskApp').directive('homeDir', homeDir);
function homeDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: 'homeDir.html'
	};
}