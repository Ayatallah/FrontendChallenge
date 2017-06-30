angular.module('TaskApp').directive('footerDir', footerDir);
function footerDir(){
	return{
		restrict: 'EA',
		scope: {},
		templateUrl: 'footerDir.html'
	};
}