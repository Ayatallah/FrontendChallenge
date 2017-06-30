angular.module('TaskApp').controller('HomeCtrl',['$scope',  HomeCtrl]);
function HomeCtrl($scope){
	var vm = this;
	vm.say = "HELLLOW!";
}