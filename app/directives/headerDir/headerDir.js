angular.module('TaskApp').directive('headerDir', headerDir);
function headerDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: '/app/directives/headerDir/headerDir.html'
	};
}