angular.module('TaskApp').controller('HomeCtrl',['$scope','$state',  HomeCtrl]);
function HomeCtrl($scope, $state){
	var vm = this;
	//vm.say = "HELLLOW!";
	if ($state.includes('home')) {
		vm.about = false;
	}
	if ($state.includes('about')) {
		vm.about = true;
	}
}