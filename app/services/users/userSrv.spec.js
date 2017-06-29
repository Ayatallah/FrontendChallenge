describe('userSrv', function(){

	var Users, $httpBackend;
	var mockUsers = [{'name':'Aya'},{'name':'Ahmed'}];
	var mockUser = {'name':'Aya'};
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

	// Test to verify the getUser works
	it('should test getUser', function() {
		$httpBackend.expectGET('https://api.github.com/users/:login').respond(mockUser);
        Users.getUser().then(function(data) {
            expect(data).toEqual(mockUser);
        });
        $httpBackend.flush();
	});

});



