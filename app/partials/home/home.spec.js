describe('HomeCtrl', function(){
	var ctrl,scope;
	beforeEach(angular.mock.module('TaskApp'));
	beforeEach(inject(function($rootScope,$controller) {
		scope = $rootScope.$new();
		ctrl = $controller('HomeCtrl',{
                '$scope': scope
        });
	}));
	it('Home should say HELLLOW!', function(){
            expect(ctrl.say).toBe('HELLLOW!');
    });
})