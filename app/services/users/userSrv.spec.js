describe('userSrv', function(){

	var Users, $httpBackend;
	var mockUsers = ['Aya','Ahmed'];
 	beforeEach(angular.mock.module('TaskApp'));

	beforeEach(inject(function(_$httpBackend_, _userSrv_) {
		$httpBackend = _$httpBackend_;
		Users = _userSrv_;
	}));

    // Test to verify the userSrv exists
	it('should exist', function() {
		expect(Users).toBeDefined();
	});

	// Test to verify the getUsers works
	it('should test getUsers', function() {
		$httpBackend.expectGET('https://api.github.com/users').respond(mockUsers);
        Users.getUsers().then(function(data) {
            expect(data).toEqual(mockUsers);
        });
        $httpBackend.flush();
	});

});



