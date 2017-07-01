angular.module('TaskApp').directive('userDir', userDir);
function userDir(){
	return{
		restrict: 'EA',
		scope: {
			user: "="
		},
		templateUrl: '/app/directives/UserDir/userDir.html'
	};
}