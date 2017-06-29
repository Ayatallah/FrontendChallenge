describe('userSrv', function(){

	var Users;
 	beforeEach(angular.mock.module('TaskApp'));
	beforeEach(inject(function(_userSrv_) {
		Users = _userSrv_;
	}));

    // Test to verify the userSrv exists
	it('should exist', function() {
		expect(Users).toBeDefined();
	});

});