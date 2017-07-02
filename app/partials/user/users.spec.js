describe('UsersCtrl', function(){
	var ctrl,$scope, mockUserSrv;

	beforeEach(angular.mock.module('TaskApp'));
	
	beforeEach(inject(function($controller, $rootScope, userSrv, $state, $q) {
		$scope = $rootScope.$new();
		mockUserSrv = userSrv;
		deferred = $q.defer();
		spyOn(mockUserSrv,"getUser").and.returnValue(deferred.promise);
		spyOn(mockUserSrv,"getUsers").and.returnValue(deferred.promise);
		var users = [{'login':1},{'login':2}];
		ctrl = $controller("UsersCtrl", {$scope: $scope, userSrv: mockUserSrv, usersNeeded:users});
	}));

    it("Test UsersCtrl.getUser", function () {
        var login = 1;
        ctrl.getuser(login);
        expect(mockUserSrv.getUser).toHaveBeenCalled();
	});

	it("Test UsersCtrl.loadmore", function () {
        ctrl.loadmore();
        expect(mockUserSrv.getUsers).toHaveBeenCalled();
	});

})