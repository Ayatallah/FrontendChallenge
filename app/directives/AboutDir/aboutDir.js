angular.module('TaskApp').directive('aboutDir', aboutDir);
function aboutDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: 'aboutDir.html'
	};
}