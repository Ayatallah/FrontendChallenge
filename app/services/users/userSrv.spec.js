describe('userSrv', function(){

	var Users, $httpBackend,state;
	var mockUsers = [{'name':'Aya'},{'name':'Ahmed'}];
	var mockUser = {'name':'Aya'};
	var login = 1;
 	beforeEach(angular.mock.module('TaskApp'));

	beforeEach(inject(function(_$httpBackend_, _userSrv_,_$state_) {
		$httpBackend = _$httpBackend_;
		Users = _userSrv_;
		state = _$state_;
        spyOn( state, 'go' );
        spyOn( state, 'transitionTo' );
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
		$httpBackend.expectGET('https://api.github.com/users/'+login).respond(mockUser);
        Users.getUser(login).then(function(data) {
            expect(data).toEqual(mockUser);
        });
        $httpBackend.flush();
	});

});



