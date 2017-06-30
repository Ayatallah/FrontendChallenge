angular.module('TaskApp').directive('aboutDir', aboutDir);
function aboutDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: '/app/directives/AboutDir/aboutDir.html'
	};
}